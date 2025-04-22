# from rest_framework import serializers
# from .models import Quote, QuoteAttachment, ShippingDetails, QuoteResponse, QuoteResponseAttachment, AlternativeOption

# class QuoteAttachmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = QuoteAttachment
#         fields = '__all__'
#         read_only_fields = ('id', 'uploaded_at')


# class ShippingDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShippingDetails
#         fields = '__all__'
#         read_only_fields = ('id',)


# class QuoteSerializer(serializers.ModelSerializer):
#     attachments = QuoteAttachmentSerializer(many=True, read_only=True)
#     shipping_details = ShippingDetailsSerializer(read_only=True)

#     class Meta:
#         model = Quote
#         fields = '__all__'
#         read_only_fields = ('id', 'quote_number', 'created_at', 'updated_at')


# from rest_framework import serializers
# from .models import Quote, QuoteAttachment, ShippingDetails

# class QuoteAttachmentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = QuoteAttachment
#         fields = ['id', 'name', 'file', 'created_at']

#     name = serializers.SerializerMethodField()
#     file = serializers.FileField(source='attachment_file')
#     created_at = serializers.SerializerMethodField()

#     def get_name(self, obj):
#         return obj.attachment_file.name.split('/')[-1]

#     def get_created_at(self, obj):
#         return obj.created_at.strftime('%b %d, %Y')


# class ShippingDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShippingDetails
#         fields = '__all__'





# from rest_framework import serializers
# from .models import QuoteResponse, AlternativeOption, QuoteAttachment

# class AlternativeOptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AlternativeOption
#         fields = ['description', 'unit_price', 'benefits']

# class QuoteResponseAttachmentSerializer(serializers.ModelSerializer):
#     name = serializers.SerializerMethodField()
#     created_at = serializers.SerializerMethodField()
#     file = serializers.FileField(source='file')

#     class Meta:
#         model = QuoteAttachment
#         fields = ['id', 'name', 'file', 'file_size', 'created_at']

#     def get_name(self, obj):
#         return obj.file_name

#     def get_created_at(self, obj):
#         return obj.uploaded_at.strftime('%b %d, %Y')
    

    

# class QuoteResponseSerializer(serializers.ModelSerializer):
#     alternatives = AlternativeOptionSerializer(many=True, read_only=True)
#     attachments = serializers.SerializerMethodField()

#     class Meta:
#         model = QuoteResponse
#         fields = [
#             'unit_price', 'total_price', 'shipping_cost', 'grand_total',
#             'lead_time', 'minimum_order', 'payment_terms', 'notes',
#             'provided_date', 'expiration_date',
#             'alternatives', 'attachments'
#         ]

#     def get_attachments(self, obj):
#         return QuoteResponseAttachmentSerializer(
#             obj.quote.attachments.all(), many=True
#         ).data


# from .serializers import QuoteResponseSerializer  # make sure it's imported

# class QuoteDetailSerializer(serializers.ModelSerializer):
#     shipping_details = ShippingDetailsSerializer(read_only=True)
#     attachments = QuoteAttachmentSerializer(many=True, source='quoteattachment_set', read_only=True)
#     response = QuoteResponseSerializer(read_only=True)  # ✅ ADD THIS LINE

#     customer_name = serializers.SerializerMethodField()
#     customer_company = serializers.SerializerMethodField()

#     def get_customer_name(self, obj):
#         return obj.user.get_full_name() or obj.user.username

#     def get_customer_company(self, obj):
#         return obj.user.company if hasattr(obj.user, "company") else "N/A"

#     class Meta:
#         model = Quote
#         fields = [
#             'id',
#             'quote_number',
#             'product_name',
#             'product_type',
#             'region',
#             'color',
#             'quality',
#             'specifications',
#             'target_price',
#             'quantity',
#             'status',
#             'created_at',
#             'customer_name',
#             'customer_company',
#             'shipping_details',
#             'attachments',
#             'response',  # ✅ INCLUDE HERE
#         ]




# from rest_framework import serializers
# from .models import Quote, QuoteAttachment, ShippingDetails, QuoteResponse, QuoteResponseAttachment, AlternativeOption


# class QuoteAttachmentSerializer(serializers.ModelSerializer):
#     name = serializers.SerializerMethodField()
#     file = serializers.FileField(source='file')
#     created_at = serializers.SerializerMethodField()

#     class Meta:
#         model = QuoteAttachment
#         fields = ['id', 'name', 'file', 'file_size', 'created_at']

#     def get_name(self, obj):
#         return obj.file_name

#     def get_created_at(self, obj):
#         return obj.uploaded_at.strftime('%b %d, %Y')


# class ShippingDetailsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = ShippingDetails
#         fields = '__all__'
#         read_only_fields = ('id',)


# class AlternativeOptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AlternativeOption
#         fields = ['description', 'unit_price', 'benefits']


# class QuoteResponseAttachmentSerializer(serializers.ModelSerializer):
#     name = serializers.SerializerMethodField()
#     created_at = serializers.SerializerMethodField()

#     class Meta:
#         model = QuoteResponseAttachment
#         fields = ['id', 'name', 'file', 'file_size', 'created_at']

#     def get_name(self, obj):
#         return obj.file_name  # ✅ correct source

#     def get_created_at(self, obj):
#         return obj.uploaded_at.strftime('%b %d, %Y')


# class QuoteResponseSerializer(serializers.ModelSerializer):
#     alternatives = AlternativeOptionSerializer(many=True, read_only=True)
#     attachments = QuoteResponseAttachmentSerializer(many=True, read_only=True)

#     class Meta:
#         model = QuoteResponse
#         fields = [
#             'unit_price', 'total_price', 'shipping_cost', 'grand_total',
#             'lead_time', 'minimum_order', 'payment_terms', 'notes',
#             'provided_date', 'expiration_date', 'alternatives', 'attachments'
#         ]


# class QuoteSerializer(serializers.ModelSerializer):
#     attachments = QuoteAttachmentSerializer(many=True, read_only=True)
#     shipping_details = ShippingDetailsSerializer(read_only=True)

#     class Meta:
#         model = Quote
#         fields = '__all__'
#         read_only_fields = ('id', 'quote_number', 'created_at', 'updated_at')


# class QuoteDetailSerializer(serializers.ModelSerializer):
#     shipping_details = ShippingDetailsSerializer(read_only=True)
#     attachments = QuoteAttachmentSerializer(many=True, read_only=True)
#     response = QuoteResponseSerializer(read_only=True)
#     customer_name = serializers.SerializerMethodField()
#     customer_company = serializers.SerializerMethodField()

#     def get_customer_name(self, obj):
#         return obj.user.get_full_name() or obj.user.username

#     def get_customer_company(self, obj):
#         return obj.user.company if hasattr(obj.user, "company") else "N/A"

#     class Meta:
#         model = Quote
#         fields = [
#             'id', 'quote_number', 'product_name', 'product_type', 'region',
#             'color', 'quality', 'specifications', 'target_price', 'quantity',
#             'status', 'created_at', 'customer_name', 'customer_company',
#             'shipping_details', 'attachments', 'response'
#         ]



from rest_framework import serializers
from .models import( Quote, QuoteAttachment, ShippingDetails, QuoteResponse, QuoteResponseAttachment, AlternativeOption,
 QuoteTimeline)


class QuoteAttachmentSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = QuoteAttachment
        fields = ['id', 'name', 'file', 'file_size', 'created_at']

    def get_name(self, obj):
        return obj.file_name

    def get_created_at(self, obj):
        return obj.uploaded_at.strftime('%b %d, %Y')


class ShippingDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingDetails
        fields = '__all__'
        read_only_fields = ('id','quote')


class AlternativeOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlternativeOption
        fields = ['description', 'unit_price', 'benefits']


class QuoteResponseAttachmentSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()
    created_at = serializers.SerializerMethodField()

    class Meta:
        model = QuoteResponseAttachment
        fields = ['id', 'name', 'file', 'file_size', 'created_at']

    def get_name(self, obj):
        return obj.file_name

    def get_created_at(self, obj):
        return obj.uploaded_at.strftime('%b %d, %Y')


class QuoteResponseSerializer(serializers.ModelSerializer):
    alternatives = AlternativeOptionSerializer(many=True, read_only=True)
    attachments = QuoteResponseAttachmentSerializer(many=True, read_only=True)

    class Meta:
        model = QuoteResponse
        fields = [
            'unit_price', 'total_price', 'shipping_cost', 'grand_total',
            'lead_time', 'minimum_order', 'payment_terms', 'notes',
            'provided_date', 'expiration_date', 'alternatives', 'attachments'
        ]


class QuoteTimelineSerializer(serializers.ModelSerializer):
    actor = serializers.StringRelatedField()

    class Meta:
        model = QuoteTimeline
        fields = ['action', 'actor', 'timestamp']

class QuoteSerializer(serializers.ModelSerializer):
    attachments = QuoteAttachmentSerializer(many=True, read_only=True)
    shipping_details = ShippingDetailsSerializer(read_only=True)
    timeline = QuoteTimelineSerializer(many=True, read_only=True)

    class Meta:
        model = Quote
        fields = '__all__'
        read_only_fields = ('id', 'quote_number', 'created_at', 'updated_at')



from .models import QuoteTimeline  # make sure this is at the top

class QuoteDetailSerializer(serializers.ModelSerializer):
    shipping_details = ShippingDetailsSerializer(read_only=True)
    attachments = QuoteAttachmentSerializer(many=True, read_only=True)
    response = QuoteResponseSerializer(read_only=True)
    customer_name = serializers.SerializerMethodField()
    customer_company = serializers.SerializerMethodField()
    timeline = serializers.SerializerMethodField()  # ✅ Add this

    def get_customer_name(self, obj):
        return obj.user.get_full_name() or obj.user.username

    def get_customer_company(self, obj):
        return obj.user.company if hasattr(obj.user, "company") else "N/A"

    def get_timeline(self, obj):
        events = QuoteTimeline.objects.filter(quote=obj).order_by("timestamp")
        return [
            {
                "event": t.action,
                "timestamp": t.timestamp.isoformat(),
                "user": t.actor.get_full_name() if t.actor else "System",
            }
            for t in events
        ]

    class Meta:
        model = Quote
        fields = [
            'id', 'quote_number', 'product_name', 'product_type', 'region',
            'color', 'quality', 'specifications', 'target_price', 'quantity',
            'status', 'created_at', 'customer_name', 'customer_company',
            'shipping_details', 'attachments', 'response', 'timeline'  # ✅ Add 'timeline'
        ]
