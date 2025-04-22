from django.db import models 
from accounts.models import User 
from quotes.models import Quote 
from orders.models import Order 
from supplier.models import Supplier
from django.shortcuts import get_object_or_404
 
 
class Conversation(models.Model): 
    """Conversation model for messaging""" 
    TYPE_CHOICES = ( 
        ('quote', 'Quote'), 
        ('order', 'Order'), 
        ('supplier', 'Supplier'), 
        ('direct', 'Direct'), 
    ) 
     
    type = models.CharField(max_length=20, choices=TYPE_CHOICES) 
    quote = models.ForeignKey(Quote, on_delete=models.SET_NULL, null=True, blank=True, related_name='conversations') 
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True, blank=True, related_name='conversations') 
    supplier = models.ForeignKey(Supplier, on_delete=models.SET_NULL, null=True,  blank=True, related_name='conversations') 
    name = models.CharField(max_length=255)       # ye id se auto karo isko 
    created_at = models.DateTimeField(auto_now_add=True) 
    updated_at = models.DateTimeField(auto_now=True) 
     
    def __str__(self): 
        return f"{self.get_type_display()}: {self.name}" 
 
class ConversationParticipant(models.Model): 
    """Participants in a conversation""" 
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name='participants') 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='conversations') 
    role = models.CharField(max_length=50)  #  Customer, Supplier, Sourcing Specialist, etc. 
    joined_at = models.DateTimeField(auto_now_add=True) 
     
    class Meta: 
        unique_together = ('conversation', 'user') 
     
    def __str__(self): 
        return f"{self.user.email} in {self.conversation}" 
 
class Message(models.Model): 
    """Message model for conversations""" 
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE,  related_name='messages') 
    sender = models.ForeignKey(User, on_delete=models.CASCADE,  related_name='sent_messages') 
    content = models.TextField() 
    sent_at = models.DateTimeField(auto_now_add=True) 
     
    class Meta: 
        ordering = ['sent_at'] 
     
    def __str__(self): 
        return f"Message from {self.sender.email} in {self.conversation}" 
 
class MessageAttachment(models.Model): 
    """Attachments for messages""" 
    message = models.ForeignKey(Message, on_delete=models.CASCADE, related_name='attachments') 
    file = models.FileField(upload_to='message_attachments/') 
    file_name = models.CharField(max_length=255) 

     
    def __str__(self): 
        return f"Attachment for message {self.message.id}: {self.file_name}" 
 
class MessageRead(models.Model): 
    """Tracks which users have read which messages""" 
    message = models.ForeignKey(Message, on_delete=models.CASCADE, related_name='read_by') 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='read_messages') 
    read_at = models.DateTimeField(auto_now_add=True) 
     
    class Meta: 
        unique_together = ('message', 'user')
    
    def __str__(self): 
        return f"{self.user.email} read message {self.message.id}"
    
    
    
    
