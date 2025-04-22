# --- admin.py for Supplier App ---
from django.contrib import admin
from .models import (
    Supplier, SupplierCertification, SupplierContact,
    SupplierProduct, UnlockedSupplier, SupplierReview
)

@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ('name', 'country', 'established_year', 'verified', 'date_added')
    search_fields = ('name', 'location', 'country')
    list_filter = ('verified', 'country')

@admin.register(SupplierCertification)
class SupplierCertificationAdmin(admin.ModelAdmin):
    list_display = ('supplier', 'name', 'issue_date', 'expiry_date')

@admin.register(SupplierContact)
class SupplierContactAdmin(admin.ModelAdmin):
    list_display = ('supplier', 'name', 'position', 'email', 'phone')

@admin.register(SupplierProduct)
class SupplierProductAdmin(admin.ModelAdmin):
    list_display = ('supplier', 'name')

@admin.register(UnlockedSupplier)
class UnlockedSupplierAdmin(admin.ModelAdmin):
    list_display = ('user', 'supplier', 'unlocked_date', 'payment_id')
    search_fields = ('user__email', 'supplier__name')
    
    
    
    
admin.site.register(SupplierReview)