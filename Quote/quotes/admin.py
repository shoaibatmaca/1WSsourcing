from django.contrib import admin
from .models import Quote, QuoteAttachment, ShippingDetails, QuoteTimeline
@admin.register(Quote)
class QuoteAdmin(admin.ModelAdmin):
    list_display = ('quote_number', 'user', 'product_name', 'status', 'created_at')
    search_fields = ('quote_number', 'product_name', 'user__email')
    list_filter = ('status', 'created_at')

@admin.register(QuoteAttachment)
class QuoteAttachmentAdmin(admin.ModelAdmin):
    list_display = ('file_name', 'quote', 'uploaded_at')
    search_fields = ('file_name',)

@admin.register(ShippingDetails)
class ShippingDetailsAdmin(admin.ModelAdmin):
    list_display = ('quote', 'destination_country', 'shipment_method')


from django.contrib import admin
from .models import QuoteResponse, AlternativeOption



@admin.register(AlternativeOption)
class AlternativeOptionAdmin(admin.ModelAdmin):
    list_display = ('quote_response', 'description', 'unit_price')


from django.contrib import admin
from .models import QuoteResponse, QuoteResponseAttachment

@admin.register(QuoteResponse)
class QuoteResponseAdmin(admin.ModelAdmin):
    list_display = ['quote', 'unit_price', 'grand_total', 'provided_date']

@admin.register(QuoteResponseAttachment)
class QuoteResponseAttachmentAdmin(admin.ModelAdmin):
    list_display = ['quote_response', 'file_name', 'file_size', 'uploaded_at']


admin.site.register(QuoteTimeline)