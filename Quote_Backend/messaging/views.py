# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework import permissions, status
# # from .models import Conversation, Message
# # from .serializers import ConversationSerializer, MessageSerializer

# # class QuoteMessagesView(APIView):
# #     permission_classes = [permissions.IsAuthenticated]

# #     def get(self, request, quote_id):
# #         try:
# #             conversation = Conversation.objects.filter(quote__id=quote_id, type='quote').first()
# #             if not conversation:
# #                 return Response({"detail": "No conversation found."}, status=404)
# #             serializer = ConversationSerializer(conversation)
# #             return Response(serializer.data)
# #         except Exception as e:
# #             return Response({"error": str(e)}, status=500)

# #     def post(self, request, quote_id):
# #         try:
# #             conversation = Conversation.objects.filter(quote__id=quote_id, type='quote').first()
# #             if not conversation:
# #                 return Response({"detail": "Conversation not found."}, status=404)

# #             message = Message.objects.create(
# #                 conversation=conversation,
# #                 sender=request.user,
# #                 content=request.data.get("content", "")
# #             )
# #             return Response(MessageSerializer(message).data, status=201)
# #         except Exception as e:
# #             return Response({"error": str(e)}, status=500)







# # # Get for all conversations for the logged-in user
# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework.permissions import IsAuthenticated
# # from .models import ConversationParticipant
# # from .serializers import ConversationSerializer


# # class MyConversationsView(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def get(self, request):
# #         conversations = ConversationParticipant.objects.filter(user=request.user).values_list('conversation', flat=True)
# #         queryset = Conversation.objects.filter(id__in=conversations).order_by('-updated_at')
# #         serializer = ConversationSerializer(queryset, many=True)
# #         return Response(serializer.data)




# # # Get for a specific conversation
# # from rest_framework.generics import RetrieveAPIView
# # from .models import Conversation
# # from .serializers import ConversationSerializer

# # class ConversationDetailView(RetrieveAPIView):
# #     permission_classes = [IsAuthenticated]
# #     queryset = Conversation.objects.all()
# #     serializer_class = ConversationSerializer

# #     def get_queryset(self):
# #         return self.queryset.filter(participants__user=self.request.user)


# # # Send a message in a conversation
# # from rest_framework import status
# # from rest_framework.views import APIView
# # from .models import Conversation, Message
# # from .serializers import MessageSerializer

# # class SendMessageView(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def post(self, request, conversation_id):
# #         try:
# #             conversation = Conversation.objects.get(id=conversation_id)
# #         except Conversation.DoesNotExist:
# #             return Response({"error": "Conversation not found"}, status=404)

# #         content = request.data.get("content")
# #         if not content:
# #             return Response({"error": "Message content is required"}, status=400)

# #         message = Message.objects.create(
# #             conversation=conversation,
# #             sender=request.user,
# #             content=content
# #         )
# #         serializer = MessageSerializer(message)
# #         return Response(serializer.data, status=status.HTTP_201_CREATED)




    
# # from rest_framework.views import APIView
# # from rest_framework.response import Response
# # from rest_framework.permissions import IsAuthenticated
# # from accounts.models import User
# # from accounts.serializers import UserSerializer

# # class AllUsersView(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def get(self, request):
# #         users = User.objects.exclude(id=request.user.id)
# #         serializer = UserSerializer(users, many=True, context={"request": request})
# #         return Response(serializer.data)

    
    
    
# # from .models import Conversation, ConversationParticipant
# # from django.db.models import Q

# # class GetOrCreateDirectConversation(APIView):
# #     permission_classes = [IsAuthenticated]

# #     def post(self, request):
# #         other_user_id = request.data.get("user_id")
# #         if not other_user_id:
# #             return Response({"error": "user_id is required"}, status=400)

# #         from accounts.models import User
# #         try:
# #             other_user = User.objects.get(id=other_user_id)
# #         except User.DoesNotExist:
# #             return Response({"error": "User not found"}, status=404)

# #         existing_conversation = Conversation.objects.filter(
# #             type="direct",
# #             participants__user=request.user
# #         ).filter(participants__user=other_user).distinct().first()

# #         if existing_conversation:
# #             serializer = ConversationSerializer(existing_conversation)
# #             return Response(serializer.data)

# #         conversation = Conversation.objects.create(
# #             type="direct",
# #             name=f"Chat with {other_user.get_full_name() or other_user.username}"
# #         )
# #         ConversationParticipant.objects.create(conversation=conversation, user=request.user, role="User")
# #         ConversationParticipant.objects.create(conversation=conversation, user=other_user, role="User")

# #         serializer = ConversationSerializer(conversation)
# #         return Response(serializer.data, status=201)




# # /////////////////////////////////////////////////////////////////////////

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.generics import RetrieveAPIView
# from rest_framework import status
# from django.db.models import Q

# from .models import Conversation, Message, ConversationParticipant
# from .serializers import (
#     ConversationSerializer,
#     MessageSerializer,
# )
# from accounts.models import User
# from accounts.serializers import UserSerializer

# from rest_framework.parsers import MultiPartParser, FormParser
# from rest_framework import permissions

# class OrderMessageView(APIView):
#     permission_classes = [IsAuthenticated]
#     parser_classes = [MultiPartParser, FormParser]

#     def get(self, request, order_id):
#         convo = Conversation.objects.filter(type='order', order_id=order_id).first()
#         if not convo:
#             return Response({"detail": "Conversation not found"}, status=404)
#         return Response(MessageSerializer(convo.messages.all(), many=True, context={"request": request}).data)

#     def post(self, request, order_id):
#         convo, _ = Conversation.objects.get_or_create(type='order', order_id=order_id, defaults={"name": f"Order Chat {order_id}"})
#         convo.participants.get_or_create(user=request.user, defaults={"role": "User"})

#         msg = Message.objects.create(conversation=convo, sender=request.user, content=request.data.get("content"))
#         return Response(MessageSerializer(msg, context={"request": request}).data, status=201)


# class SupplierMessageView(APIView):
#     permission_classes = [IsAuthenticated]
#     parser_classes = [MultiPartParser, FormParser]

#     def get(self, request, supplier_id):
#         convo = Conversation.objects.filter(type='supplier', supplier_id=supplier_id).first()
#         if not convo:
#             return Response({"detail": "Conversation not found"}, status=404)
#         return Response(MessageSerializer(convo.messages.all(), many=True, context={"request": request}).data)

#     def post(self, request, supplier_id):
#         convo, _ = Conversation.objects.get_or_create(type='supplier', supplier_id=supplier_id, defaults={"name": f"Supplier Chat {supplier_id}"})
#         convo.participants.get_or_create(user=request.user, defaults={"role": "User"})

#         msg = Message.objects.create(conversation=convo, sender=request.user, content=request.data.get("content"))
#         return Response(MessageSerializer(msg, context={"request": request}).data, status=201)





# class QuoteMessagesView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request, quote_id):
#         try:
#             conversation = Conversation.objects.filter(quote__id=quote_id, type='quote').first()
#             if not conversation:
#                 return Response({"detail": "No conversation found."}, status=404)
#             serializer = ConversationSerializer(conversation, context={"request": request})
#             return Response(serializer.data)
#         except Exception as e:
#             return Response({"error": str(e)}, status=500)

#     def post(self, request, quote_id):
#         try:
#             conversation = Conversation.objects.filter(quote__id=quote_id, type='quote').first()
#             if not conversation:
#                 return Response({"detail": "Conversation not found."}, status=404)

#             message = Message.objects.create(
#                 conversation=conversation,
#                 sender=request.user,
#                 content=request.data.get("content", "")
#             )
#             return Response(
#                 MessageSerializer(message, context={"request": request}).data,
#                 status=201
#             )
#         except Exception as e:
#             return Response({"error": str(e)}, status=500)


# class MyConversationsView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         conversations = ConversationParticipant.objects.filter(user=request.user).values_list('conversation', flat=True)
#         queryset = Conversation.objects.filter(id__in=conversations).order_by('-updated_at')
#         serializer = ConversationSerializer(queryset, many=True, context={"request": request})
#         return Response(serializer.data)


# class ConversationDetailView(RetrieveAPIView):
#     permission_classes = [IsAuthenticated]
#     queryset = Conversation.objects.all()
#     serializer_class = ConversationSerializer

#     def get_queryset(self):
#         return self.queryset.filter(participants__user=self.request.user)

#     def get_serializer_context(self):
#         return {"request": self.request}


# class SendMessageView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, conversation_id):
#         try:
#             conversation = Conversation.objects.get(id=conversation_id)
#         except Conversation.DoesNotExist:
#             return Response({"error": "Conversation not found"}, status=404)

#         content = request.data.get("content")
#         if not content:
#             return Response({"error": "Message content is required"}, status=400)

#         message = Message.objects.create(
#             conversation=conversation,
#             sender=request.user,
#             content=content
#         )
#         serializer = MessageSerializer(message, context={"request": request})
#         return Response(serializer.data, status=status.HTTP_201_CREATED)


# class AllUsersView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         users = User.objects.exclude(id=request.user.id)
#         serializer = UserSerializer(users, many=True, context={"request": request})
#         return Response(serializer.data)


# class GetOrCreateDirectConversation(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         other_user_id = request.data.get("user_id")
#         if not other_user_id:
#             return Response({"error": "user_id is required"}, status=400)

#         try:
#             other_user = User.objects.get(id=other_user_id)
#         except User.DoesNotExist:
#             return Response({"error": "User not found"}, status=404)

#         existing_conversation = Conversation.objects.filter(
#             type="direct",
#             participants__user=request.user
#         ).filter(participants__user=other_user).distinct().first()

#         if existing_conversation:
#             serializer = ConversationSerializer(existing_conversation, context={"request": request})
#             return Response(serializer.data)

#         conversation = Conversation.objects.create(
#             type="direct",
#             name=f"Chat with {other_user.get_full_name() or other_user.username}"
#         )
#         ConversationParticipant.objects.create(conversation=conversation, user=request.user, role="User")
#         ConversationParticipant.objects.create(conversation=conversation, user=other_user, role="User")

#         serializer = ConversationSerializer(conversation, context={"request": request})
#         return Response(serializer.data, status=201)







from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from messaging.models import ConversationParticipant, Conversation
from messaging.serializers import ConversationListSerializer, ConversationSerializer
from messaging.models import Message
from messaging.serializers import MessageSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from messaging.models import MessageAttachment
from django.db import models
from django.shortcuts import get_object_or_404



class UserInboxView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        conversations = Conversation.objects.filter(
            models.Q(type='direct', participants__user=user) |  # allow all direct
            models.Q(type='quote', quote__user=user) |  # only if user owns quote
            models.Q(type='order', order__user=user)    # only if user owns order
        ).distinct().prefetch_related("participants", "messages", "quote", "order")

        serializer = ConversationSerializer(conversations, many=True, context={"request": request})
        return Response(serializer.data)

class UserConversationsView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request): 
        conversations = ConversationParticipant.objects.filter(user=request.user).select_related('conversation')
        serializer = ConversationListSerializer([c.conversation for c in conversations], many=True)
        return Response(serializer.data)




# class SendMessageView(APIView):
#     permission_classes = [IsAuthenticated]
#     parser_classes = [MultiPartParser, FormParser]

#     def post(self, request):
#         conversation_id = request.data.get('conversation_id')
#         content = request.data.get('content')

#         if not content:
#             return Response({'error': 'Message content required'}, status=400)

#         message = Message.objects.create(
#             conversation_id=conversation_id,
#             sender=request.user,
#             content=content
#         )

#         # Save attachments
#         files = request.FILES.getlist('attachments')
#         for f in files:
#             MessageAttachment.objects.create(
#                 message=message,
#                 file=f,
#                 file_name=f.name
#             )

#         return Response({"success": True, "message_id": message.id})


# with restriction
class SendMessageView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        conversation_id = request.data.get("conversation")
        content = request.data.get("content")

        try:
            conversation = Conversation.objects.get(id=conversation_id)
        except Conversation.DoesNotExist:
            return Response({"detail": "Conversation not found."}, status=404)

        # Check if user is allowed
        if (
            conversation.type == "quote" and conversation.quote.user != user or
            conversation.type == "order" and conversation.order.user != user or
            conversation.type == "supplier" and not conversation.participants.filter(user=user).exists()
        ) and conversation.type != "direct":
            return Response({"detail": "You are not allowed to send messages in this conversation."}, status=403)

        message = Message.objects.create(
            conversation=conversation,
            sender=user,
            content=content
        )

        return Response(MessageSerializer(message, context={"request": request}).data, status=201)






from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from messaging.models import Conversation, Message
from messaging.serializers import MessageSerializer
from rest_framework import status


class ConversationMessagesView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, conversation_id):
        conversation = get_object_or_404(Conversation, id=conversation_id)

        # Permission check
        if (
            conversation.type == "quote" and conversation.quote.user != request.user or
            conversation.type == "order" and conversation.order.user != request.user or
            conversation.type == "supplier" and not conversation.participants.filter(user=request.user).exists()
        ) and conversation.type != "direct":
            return Response({"detail": "You are not allowed to view messages."}, status=403)

        messages = conversation.messages.all().order_by("sent_at")
        serializer = MessageSerializer(messages, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request, conversation_id):
        conversation = get_object_or_404(Conversation, id=conversation_id)
        content = request.data.get("content")

        if not content:
            return Response({"detail": "Message content is required."}, status=400)

        # Permission check
        if (
            conversation.type == "quote" and conversation.quote.user != request.user or
            conversation.type == "order" and conversation.order.user != request.user or
            conversation.type == "supplier" and not conversation.participants.filter(user=request.user).exists()
        ) and conversation.type != "direct":
            return Response({"detail": "You are not allowed to send messages."}, status=403)

        message = Message.objects.create(
            conversation=conversation,
            sender=request.user,
            content=content
        )

        serializer = MessageSerializer(message, context={"request": request})
        return Response(serializer.data, status=201)


from quotes.models import Quote
from accounts.models import User
from messaging.models import ConversationParticipant
from django.shortcuts import get_object_or_404


class GetOrCreateQuoteConversationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, quote_id):
        quote = get_object_or_404(Quote, id=quote_id)

        # Find first existing conversation (if any)
        conversation = Conversation.objects.filter(type="quote", quote=quote).first()

        # If not exists, create one
        if not conversation:
            conversation = Conversation.objects.create(
                type="quote",
                quote=quote,
                name=f"Quote Chat: {quote.quote_number}"
            )

        # Ensure current user is a participant
        ConversationParticipant.objects.get_or_create(
            conversation=conversation,
            user=request.user,
            defaults={"role": "Customer"}
        )

        # Optionally add admin
        admin = User.objects.filter(is_superuser=True).first()
        if admin:
            ConversationParticipant.objects.get_or_create(
                conversation=conversation,
                user=admin,
                defaults={"role": "Admin"}
            )

        return Response({"id": conversation.id})

from orders.models import Order



class OrderConversationView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, order_id):
        try:
            order = get_object_or_404(Order, id=order_id)

            conversation, created = Conversation.objects.get_or_create(
                type="order",
                order=order,
                defaults={"name": f"Order Chat: {order.order_number}"}
            )

            ConversationParticipant.objects.get_or_create(
                conversation=conversation,
                user=request.user,
                defaults={"role": "Customer"}
            )

            # Add admin if not already added
            admin_user = User.objects.filter(is_staff=True).first()
            if admin_user and not ConversationParticipant.objects.filter(conversation=conversation, user=admin_user).exists():
                ConversationParticipant.objects.create(
                    conversation=conversation,
                    user=admin_user,
                    role="Admin"
                )

            return Response({"id": conversation.id}, status=201)

        except Exception as e:
            return Response({"error": str(e)}, status=500)




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from .models import Conversation, Message, ConversationParticipant
from .serializers import MessageSerializer
from orders.models import Order  # or wherever your Order model is

class OrderMessageListCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_conversation(self, order, user):
        convo = Conversation.objects.filter(order=order, type="order").first()
        if convo and ConversationParticipant.objects.filter(conversation=convo, user=user).exists():
            return convo
        return None

    def get(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response({"error": "Order not found"}, status=404)

        convo = self.get_conversation(order, request.user)
        if not convo:
            return Response({"error": "No conversation found"}, status=404)

        messages = Message.objects.filter(conversation=convo).order_by("sent_at")
        return Response(MessageSerializer(messages, many=True).data)

    def post(self, request, order_id):
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response({"error": "Order not found"}, status=404)

        convo = self.get_conversation(order, request.user)
        if not convo:
            convo = Conversation.objects.create(type="order", order=order)
            ConversationParticipant.objects.create(conversation=convo, user=request.user)

        content = request.data.get("content")
        if not content:
            return Response({"error": "Message content required"}, status=400)

        message = Message.objects.create(
            conversation=convo,
            sender=request.user,
            content=content,
        )
        return Response(MessageSerializer(message).data, status=201)



from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from orders.models import Order
from quotes.models import Quote
from supplier.models import Supplier
from datetime import timedelta
from django.utils.timezone import now
from statistics import mean






@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_stats(request):
    user = request.user

    orders = Order.objects.filter(user=user)
    active_orders = orders.filter(status__in=["processing", "confirmed"]).count()
    pending_shipment = orders.filter(status="confirmed").count()

    quotes = Quote.objects.filter(user=user)
    awaiting_quotes = quotes.filter(status="awaiting").count()  

    suppliers = Supplier.objects.all()
    new_suppliers = suppliers.filter(date_added__gte=now() - timedelta(days=30)).count()



    avg_response = 0

    return Response({
        "active_orders": active_orders,
        "pending_shipment": pending_shipment,
        "quote_requests": quotes.count(),
        "awaiting_response": awaiting_quotes,
        "suppliers": suppliers.count(),
        "new_suppliers": new_suppliers,
        "average_response": avg_response,
    })
