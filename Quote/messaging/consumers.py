# import json
# from channels.generic.websocket import AsyncWebsocketConsumer
# from channels.db import database_sync_to_async
# from accounts.models import User
# from .models import Message, Conversation
# from .serializers import MessageSerializer

# class QuoteChatConsumer(AsyncWebsocketConsumer):
#     async def connect(self):
#         self.quote_id = self.scope['url_route']['kwargs']['quote_id']
#         self.room_group_name = f'quote_chat_{self.quote_id}'

#         await self.channel_layer.group_add(
#             self.room_group_name,
#             self.channel_name
#         )
#         await self.accept()

#         # ✅ Send previous chat messages
#         messages = await self.get_existing_messages()
#         await self.send(text_data=json.dumps({
#             "type": "chat_history",
#             "messages": messages
#         }))

#     async def disconnect(self, close_code):
#         await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

#     async def receive(self, text_data):
#         data = json.loads(text_data)
#         content = data.get('content', '').strip()
#         user = self.scope['user']

#         if not content or not user.is_authenticated:
#             return

#         # ✅ Save message in DB
#         msg_obj = await self.save_message(user.id, content)

#         # ✅ Broadcast to group
#         await self.channel_layer.group_send(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',
#                 'message': MessageSerializer(msg_obj).data
#             }
#         )

#     async def chat_message(self, event):
#         await self.send(text_data=json.dumps({
#             'type': 'new_message',
#             'message': event['message']
#         }))

#     # ✅ Fixed: Fetch + serialize inside sync
#     @database_sync_to_async
#     def get_existing_messages(self):
#         convo = Conversation.objects.filter(quote__id=self.quote_id, type='quote').first()
#         if convo:
#             messages = convo.messages.select_related('sender').all()
#             return MessageSerializer(messages, many=True).data
#         return []

#     @database_sync_to_async
#     def save_message(self, user_id, content):
#         user = User.objects.get(id=user_id)
#         convo = Conversation.objects.get(quote__id=self.quote_id, type='quote')
#         return Message.objects.create(conversation=convo, sender=user, content=content)



import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from accounts.models import User
from .models import Message, Conversation
from .serializers import MessageSerializer

class QuoteChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.quote_id = self.scope['url_route']['kwargs']['quote_id']
        self.room_group_name = f'quote_chat_{self.quote_id}'

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

        messages = await self.get_existing_messages()
        await self.send(text_data=json.dumps({
            "type": "chat_history",
            "messages": messages
        }))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        content = data.get('content', '').strip()
        user = self.scope['user']

        if not content or not user.is_authenticated:
            return

        msg_obj = await self.save_message(user.id, content)

        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'send_message',  # must match method below
                'message': MessageSerializer(msg_obj).data
            }
        )

    async def send_message(self, event):
        await self.send(text_data=json.dumps({
            'type': 'new_message',
            'message': event['message']
        }))

    @database_sync_to_async
    def get_existing_messages(self):
        convo = Conversation.objects.filter(quote__id=self.quote_id, type='quote').first()
        if convo:
            messages = convo.messages.select_related('sender').all()
            return MessageSerializer(messages, many=True).data
        return []

    @database_sync_to_async
    def save_message(self, user_id, content):
        user = User.objects.get(id=user_id)
        convo = Conversation.objects.get(quote__id=self.quote_id, type='quote')
        return Message.objects.create(conversation=convo, sender=user, content=content)
