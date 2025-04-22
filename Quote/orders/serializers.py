# from rest_framework import serializers 
# from orders.models import Order, OrderDetail, OrderShipping, OrderEvent, OrderDocument 
# from supplier.serializers import SupplierSerializer 

 
# class OrderDetailSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderDetail
#         fields = '__all__'



# class OrderShippingSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderShipping
#         fields = '__all__'
        
        
# class OrderEventSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderEvent
#         fields = '__all__'



# class OrderDocumentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = OrderDocument
#         fields = '__all__'


# class OrderSerializer(serializers.ModelSerializer):
#     details = OrderDetailSerializer(read_only=True)
#     shipping = OrderShippingSerializer(read_only=True)
#     events = OrderEventSerializer(many=True, read_only=True)
#     documents = OrderDocumentSerializer(many=True, read_only=True)
#     customer = serializers.SerializerMethodField()
#     supplier = SupplierSerializer(read_only=True)

#     class Meta:
#         model = Order
#         fields = [
#             'id', 'order_number', 'status', 'created_at', 'updated_at',
#             'quantity', 'unit_price', 'total_price', 'shipping_cost', 'grand_total',
#             'details', 'shipping', 'events', 'documents',
#             'customer', 'supplier'
#         ]

#     def get_customer(self, obj):
#         user = obj.user
#         return {
#             "name": user.get_full_name(),
#             "email": user.email,
#             "company": user.profile.company_name if hasattr(user, "profile") else "",
#             "phone": user.profile.phone if hasattr(user, "profile") else "",
#         }





from rest_framework import serializers
from orders.models import (
    Order, OrderDetail, OrderShipping,
    OrderEvent, OrderDocument
)
from supplier.serializers import SupplierSerializer
from quotes.serializers import QuoteSerializer

# Reusable sub-serializers
class OrderDetailInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = '__all__'

class OrderShippingSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderShipping
        fields = '__all__'

class OrderEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderEvent
        fields = '__all__'

class OrderDocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDocument
        fields = '__all__'

# ✅ Order List Serializer
class OrderSerializer(serializers.ModelSerializer):
    details = OrderDetailInfoSerializer(read_only=True)
    shipping = OrderShippingSerializer(read_only=True)
    events = OrderEventSerializer(many=True, read_only=True)
    documents = OrderDocumentSerializer(many=True, read_only=True)
    customer = serializers.SerializerMethodField()
    supplier = SupplierSerializer(read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'status', 'created_at', 'updated_at',
            'quantity', 'unit_price', 'total_price', 'shipping_cost', 'grand_total',
            'details', 'shipping', 'events', 'documents',
            'customer', 'supplier'
        ]

    def get_customer(self, obj):
        user = obj.user
        return {
        "name": user.get_full_name(),
        "email": user.email,
        "company": user.company,  # ✅ direct access
        "phone": user.phone,      # ✅ direct access
    }

# ✅ Order Detail Serializer (includes quote and everything)
class OrderDetailSerializer(serializers.ModelSerializer):
    quote = QuoteSerializer(read_only=True)
    details = OrderDetailInfoSerializer(read_only=True)
    shipping = OrderShippingSerializer(read_only=True)
    events = OrderEventSerializer(many=True, read_only=True)
    documents = OrderDocumentSerializer(many=True, read_only=True)
    customer = serializers.SerializerMethodField()
    supplier = SupplierSerializer(read_only=True)

    class Meta:
        model = Order
        fields = [
            'id', 'order_number', 'status', 'created_at', 'updated_at',
            'quantity', 'unit_price', 'total_price', 'shipping_cost', 'grand_total',
            'quote', 'details', 'shipping', 'events', 'documents',
            'customer', 'supplier'
        ]

    def get_customer(self, obj):
        user = obj.user
        return {
        "name": user.get_full_name(),
        "email": user.email,
        "company": user.company, 
        "phone": user.phone,     
        }
