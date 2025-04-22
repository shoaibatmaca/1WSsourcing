from django.db import models
from accounts.models import User 
from quotes.models import Quote 
from supplier.models import Supplier 
from django.utils import timezone
import uuid
from django.shortcuts import get_object_or_404
 


class Order(models.Model): 
    """Order model""" 
    STATUS_CHOICES = ( 
        ('processing', 'Processing'), 
        ('confirmed', 'Confirmed'), 
        ('production', 'In Production'), 
        ('shipped', 'Shipped'), 
        ('delivered', 'Delivered'), 
        ('cancelled', 'Cancelled'), 
    ) 
     
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    order_number = models.CharField(max_length=20, unique=True, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders') 
    quote = models.OneToOneField(Quote, on_delete=models.SET_NULL, null=True, 
related_name='order') 
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, 
related_name='orders') 
    product = models.CharField(max_length=255) 
    quantity = models.PositiveIntegerField() 
    unit_price = models.DecimalField(max_digits=10, decimal_places=2) 
    total_price = models.DecimalField(max_digits=12, decimal_places=2) 
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2) 
    grand_total = models.DecimalField(max_digits=12, decimal_places=2) 
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, 
default='processing') 
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True) 
    
    def save(self, *args, **kwargs): 
        if not self.order_number: 
            last_order = Order.objects.order_by('-created_at').first() 
            if last_order and last_order.order_number: 
                try: 
                    last_number = int(last_order.order_number.split('-')[-1]) 
                    new_number = last_number + 1 
                except ValueError: 
                    new_number = 1 
            else: 
                new_number = 1 
         
            year = timezone.now().year 
            self.order_number = f"ORD-{year}-{new_number:05d}" 
     
        super().save(*args, **kwargs) 

    
    def __str__(self): 
        return self.order_number 
 
class OrderDetail(models.Model): 
    """Additional details for orders""" 
    order = models.OneToOneField(Order, on_delete=models.CASCADE, 
related_name='details') 
    color = models.CharField(max_length=100, blank=True) 
    size = models.CharField(max_length=100, blank=True) 
    specifications = models.TextField(blank=True) 
    payment_terms = models.CharField(max_length=100) 
    lead_time = models.CharField(max_length=50) 
     
    def __str__(self): 
        return f"Details for {self.order.order_number}" 
 
class OrderShipping(models.Model): 
    """Shipping information for orders""" 
    order = models.OneToOneField(Order, on_delete=models.CASCADE, 
related_name='shipping') 
    method = models.CharField(max_length=20)  # sea, air, express 
    carrier = models.CharField(max_length=100) 
    tracking_number = models.CharField(max_length=100, blank=True) 
    estimated_delivery = models.DateField(null=True, blank=True) 
    shipping_address = models.TextField() 
     
    def __str__(self): 
        return f"Shipping for {self.order.order_number}" 
 
class OrderEvent(models.Model): 
    """Timeline events for orders""" 
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='events') 
    date = models.DateField() 
    time = models.TimeField() 
    event = models.CharField(max_length=255) 
    location = models.CharField(max_length=255, blank=True) 
    user = models.CharField(max_length=255)  # User or system that created the event 
    status = models.CharField(max_length=20)  # completed, current, upcoming, delayed, 

     
    class Meta: 
        ordering = ['date', 'time'] 
     
    def __str__(self): 
        return f"{self.order.order_number} - {self.event}" 
 
class OrderDocument(models.Model): 
    """Documents related to orders""" 
    order = models.ForeignKey(Order, on_delete=models.CASCADE, 
related_name='documents') 
    name = models.CharField(max_length=255) 
    file = models.FileField(upload_to='order_documents/') 
    size = models.PositiveIntegerField()  # Size in bytes 
    date_added = models.DateField(auto_now_add=True) 
     
    def __str__(self): 
        return f"{self.order.order_number} - {self.name}"