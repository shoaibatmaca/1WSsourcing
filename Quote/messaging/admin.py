from django.contrib import admin
from .models import Conversation, ConversationParticipant, Message, MessageAttachment
# Register your models here.
admin.site.site_header = "Quote Chat Admin"
admin.site.site_title = "Quote Chat Admin Portal"
admin.site.index_title = "Welcome to the Quote Chat Admin Portal"
admin.site.register(Conversation)
admin.site.register(ConversationParticipant)
admin.site.register(Message)
admin.site.register(MessageAttachment)
