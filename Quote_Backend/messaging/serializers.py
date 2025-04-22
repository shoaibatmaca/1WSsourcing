from rest_framework import serializers
from .models import Conversation, Message, MessageAttachment, ConversationParticipant
from accounts.models import User
from quotes.models import Quote
from orders.models import Order
from django.shortcuts import get_object_or_404

from supplier.models import Supplier
from accounts.serializers import UserPublicSerializer  # Assuming you have a serializer for User
from quotes.serializers import QuoteSerializer  # Assuming you have a serializer for Quote
from orders.serializers import OrderSerializer  # Assuming you have a serializer for Order
from supplier.serializers import SupplierSerializer  # Assuming you have a serializer for Supplier


class MessageAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageAttachment
        fields = ['id', 'file', 'file_name']



class MessageSerializer(serializers.ModelSerializer):
    sender_name = serializers.SerializerMethodField()
    sender_id = serializers.IntegerField(source="sender.id", read_only=True)
    sender_profile_image = serializers.SerializerMethodField()
    attachments = MessageAttachmentSerializer(many=True, read_only=True)

    class Meta:
        model = Message
        fields = ['id', 'content', 'sender_id', 'sender_name', 'sender_profile_image', 'sent_at', 'attachments']

    def get_sender_name(self, obj):
        return obj.sender.get_full_name() or obj.sender.username

    def get_sender_profile_image(self, obj):
        request = self.context.get("request")
        if obj.sender.profile_image and request:
            return request.build_absolute_uri(obj.sender.profile_image.url)
        return None







class ConversationSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)
    type = serializers.CharField()

    class Meta:
        model = Conversation
        fields = ['id', 'name', 'type', 'created_at', 'messages']



# /////////////////////////



from rest_framework import serializers
from messaging.models import Conversation, ConversationParticipant
from quotes.serializers import QuoteSerializer  # if you want to show quote details
from orders.serializers import OrderSerializer
from supplier.serializers import SupplierSerializer
from messaging.models import MessageAttachment
from messaging.models import Message
from accounts.serializers import UserPublicSerializer 


class ConversationListSerializer(serializers.ModelSerializer):
    last_message = serializers.SerializerMethodField()
    participants = serializers.SerializerMethodField()
    quote = QuoteSerializer(read_only=True)
    order = OrderSerializer(read_only=True)
    supplier = SupplierSerializer(read_only=True)

    class Meta:
        model = Conversation
        fields = ['id', 'type', 'name', 'quote', 'order', 'supplier', 'last_message', 'participants', 'updated_at']

    def get_last_message(self, obj):
        last_msg = obj.messages.order_by('-sent_at').first()
        if last_msg:
            return {
                'content': last_msg.content,
                'sent_at': last_msg.sent_at,
                'sender': last_msg.sender.get_full_name() or last_msg.sender.email
            }
        return None

    def get_participants(self, obj):
        return [p.user.get_full_name() or p.user.email for p in obj.participants.all()]




class MessageAttachmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageAttachment
        fields = ['id', 'file', 'file_name']


class MessageSerializer(serializers.ModelSerializer):
    sender = UserPublicSerializer(read_only=True)
    attachments = MessageAttachmentSerializer(many=True, read_only=True)
    conversation = ConversationSerializer()


    class Meta:
        model = Message
        fields = ['id', 'sender', 'content', 'sent_at', 'attachments', 'conversation']





# /For Quote:

class QuoteDetailSerializer(serializers.ModelSerializer):
    conversations = serializers.SerializerMethodField()

    class Meta:
        model = Quote
        fields = "__all__"
        
    def get_conversations(self, obj):
        return obj.conversations.filter(type="quote").values("id", "type")

    # def get_conversations(self, obj):
    #     return obj.conversations.values("id", "type")  # or use a nested serializer
    