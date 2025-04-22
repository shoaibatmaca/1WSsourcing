from django.db import models 
from accounts.models import User 
from supplier .models import Supplier
import uuid 
 
class Quote(models.Model): 
    """Quote request model""" 
    STATUS_CHOICES = ( 
        ('pending', 'Pending'), 
        ('in_progress', 'In Progress'), 
        ('responded', 'Responded'), 
        ('approved', 'Approved'), 
        ('rejected', 'Rejected'), 
        ('expired', 'Expired'), 
    ) 
     
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) 
    quote_number = models.CharField(max_length=20, unique=True) 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='quotes') 
    product_name = models.CharField(max_length=255) 
    product_type = models.CharField(max_length=100) 
    quantity = models.PositiveIntegerField() 
    region = models.CharField(max_length=100) 
    color = models.CharField(max_length=100, blank=True) 
    target_price = models.CharField(max_length=50, blank=True) 
    quality = models.CharField(max_length=50) 
    specifications = models.TextField() 
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending') 
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True) 
     
    def save(self, *args, **kwargs): 
        if not self.quote_number: 
            # Generate quote number: QUO-YEAR-XXXXX 
            last_quote = Quote.objects.order_by('-created_at').first() 
            if last_quote and last_quote.quote_number: 
                try: 
                    last_number = int(last_quote.quote_number.split('-')[-1]) 
                    new_number = last_number + 1 
                except ValueError: 
                    new_number = 1 
            else: 
                new_number = 1 
             
            from django.utils import timezone 
            year = timezone.now().year 
            self.quote_number = f"QUO-{year}-{new_number:05d}" 
         
        super().save(*args, **kwargs) 
     
    def __str__(self): 
        return self.quote_number 
 
class QuoteAttachment(models.Model): 
    """Attachments for quote requests""" 
    quote = models.ForeignKey(Quote, on_delete=models.CASCADE, 
related_name='attachments') 
    file = models.FileField(upload_to='quote_attachments/') 
    file_name = models.CharField(max_length=255) 
    file_size = models.PositiveIntegerField()  # Size in bytes 
    uploaded_at = models.DateTimeField(auto_now_add=True) 
     
    def __str__(self): 
        return f"{self.quote.quote_number} - {self.file_name}" 
 
class ShippingDetails(models.Model): 
    """Shipping details for quotes""" 
    quote = models.OneToOneField(Quote, on_delete=models.CASCADE, 
related_name='shipping_details') 
    port_name = models.CharField(max_length=100, blank=True) 
    destination_country = models.CharField(max_length=100) 
    shipment_terms = models.CharField(max_length=50, blank=True) 
    payment_terms = models.CharField(max_length=100, blank=True) 
    shipment_method = models.CharField(max_length=20)  # sea, air, express 
    shipment_destination = models.CharField(max_length=20)  # port, door 
    door_address = models.TextField(blank=True) 
    shipment_details = models.TextField(blank=True) 
     
    def __str__(self): 
        return f"Shipping for {self.quote.quote_number}" 
 
 




class QuoteResponse(models.Model): 
    """Response to a quote request""" 
    quote = models.OneToOneField(Quote, on_delete=models.CASCADE, 
related_name='response') 
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, 
related_name='quote_responses') 
    unit_price = models.DecimalField(max_digits=10, decimal_places=2) 
    total_price = models.DecimalField(max_digits=12, decimal_places=2) 
    shipping_cost = models.DecimalField(max_digits=10, decimal_places=2) 
    grand_total = models.DecimalField(max_digits=12, decimal_places=2) 
    lead_time = models.CharField(max_length=50) 
    minimum_order = models.CharField(max_length=50) 
    payment_terms = models.CharField(max_length=100) 
    notes = models.TextField(blank=True) 
    provided_date = models.DateTimeField(auto_now_add=True) 
    expiration_date = models.DateField() 
     
    def __str__(self): 
        return f"Response for {self.quote.quote_number}" 
 
class AlternativeOption(models.Model): 
    """Alternative options provided in quote responses""" 
    quote_response = models.ForeignKey(QuoteResponse, on_delete=models.CASCADE, 
related_name='alternatives') 
    description = models.CharField(max_length=255) 
    unit_price = models.DecimalField(max_digits=10, decimal_places=2) 
    benefits = models.TextField() 
     
    def __str__(self): 
        return f"Alternative for {self.quote_response.quote.quote_number}" 

 
class QuoteResponseAttachment(models.Model):
    quote_response = models.ForeignKey("QuoteResponse", on_delete=models.CASCADE, related_name='attachments')
    file = models.FileField(upload_to='quote_response_attachments/')
    file_name = models.CharField(max_length=255)
    file_size = models.PositiveIntegerField()  # In bytes
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.quote_response.quote.quote_number} - {self.file_name}"



class QuoteTimeline(models.Model):
    quote = models.ForeignKey("quotes.Quote", on_delete=models.CASCADE, related_name="timeline")
    action = models.CharField(max_length=255)  # e.g., "Quote submitted", "Assigned to sourcing specialist"
    actor = models.ForeignKey("accounts.User", on_delete=models.SET_NULL, null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.action} on {self.quote.quote_number}"
