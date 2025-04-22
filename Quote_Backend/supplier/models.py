from django.db import models 
from accounts.models import User


class Supplier(models.Model): 
    """Supplier model representing manufacturing companies""" 
    name = models.CharField(max_length=255) 
    location = models.CharField(max_length=255) 
    category = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=100) 
    established_year = models.PositiveIntegerField() 
    employees = models.CharField(max_length=50)  # Range like "100-500" 
    description = models.TextField() 
    logo = models.ImageField(upload_to='supplier_logos/', blank=True, null=True) 
    min_order_value = models.CharField(max_length=50) 
    production_capacity = models.CharField(max_length=100) 
    verified = models.BooleanField(default=False) 
    date_added = models.DateTimeField(auto_now_add=True) 
     
    def __str__(self): 
        return self.name 
 
class SupplierCertification(models.Model): 
    """Certifications held by suppliers""" 
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, default='null',
related_name='certifications') 
    name = models.CharField(max_length=100) 
    issue_date = models.DateField() 
    expiry_date = models.DateField(null=True, blank=True) 
    certificate_file = models.FileField(upload_to='supplier_certificates/', blank=True, null=True) 
     
    def __str__(self): 
        return f"{self.supplier.name} - {self.name}" 
 
class SupplierContact(models.Model): 
    """Contact information for suppliers""" 
    supplier = models.OneToOneField(Supplier, on_delete=models.CASCADE, related_name='contact') 
    name = models.CharField(max_length=255) 
    position = models.CharField(max_length=100) 
    email = models.EmailField() 
    phone = models.CharField(max_length=20)

    # Additional fields for contact information
    website = models.URLField(blank=True, null=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self): 
        return f"{self.supplier.name} - {self.name}" 

class SupplierProduct(models.Model): 
    """Products offered by suppliers""" 
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, 
related_name='products') 
    name = models.CharField(max_length=255) 
    description = models.TextField() 
    image = models.ImageField(upload_to='supplier_products/', blank=True, null=True) 
     
    def __str__(self): 
        return f"{self.supplier.name} - {self.name}" 
 
class UnlockedSupplier(models.Model): 
    """Tracks which users have unlocked which suppliers""" 
    user = models.ForeignKey(User, on_delete=models.CASCADE, 
related_name='unlocked_suppliers') 
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, 
related_name='unlocked_by') 
    unlocked_date = models.DateTimeField(auto_now_add=True) 
    payment_id = models.CharField(max_length=100)  # Reference to payment system 
     
    class Meta: 
        unique_together = ('user', 'supplier') 
     
    def __str__(self): 
        return f"{self.user.email} unlocked {self.supplier.name}" 
    
class SupplierReview(models.Model):
    supplier = models.ForeignKey(Supplier, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])  # 1 to 5 stars
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['supplier', 'user']

    def __str__(self):
        return f"{self.user.email} - {self.supplier.name} - {self.rating}★"
