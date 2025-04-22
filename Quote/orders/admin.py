from django.contrib import admin
from orders.models import Order, OrderDetail, OrderShipping, OrderEvent, OrderDocument
# # # Register your models here.



admin.site.register(OrderDetail)
admin.site.register(OrderDocument)
admin.site.register(OrderEvent)
admin.site.register(OrderShipping)

from django.contrib import admin
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['order_number', 'user', 'quote', 'supplier', 'status', 'created_at']
    readonly_fields = ['order_number']  # 👈 This prevents editing
