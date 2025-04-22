# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status, permissions
# from .serializers import QuoteSerializer
# from django.contrib.auth import get_user_model
# from rest_framework.permissions import AllowAny
# from .models import Quote, QuoteAttachment, ShippingDetails



# User = get_user_model()

# class TempQuoteView(APIView):
#     """
#     Save quote temporarily in session if user is not authenticated
#     """
#     permission_classes = [AllowAny] 
#     def post(self, request):
#         quote_data = request.data
#         request.session['temp_quote_data'] = quote_data
#         return Response({"message": "Quote saved temporarily."}, status=200)


# User = get_user_model()

# from messaging.models import Conversation, ConversationParticipant

# class FinalizeQuoteView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         quote_data = request.session.get('temp_quote_data')

#         if not quote_data:
#             return Response({"message": "No quote data found in session."}, status=400)

#         quote_data['user'] = request.user.id
#         quote_data['product_name'] = quote_data.pop('productName', '')
#         quote_data['product_type'] = quote_data.pop('productType', '')

#         shipping_fields = {
#             'port_name': quote_data.pop('portName', ''),
#             'destination_country': quote_data.pop('destinationCountry', ''),
#             'shipment_terms': quote_data.pop('shipmentTerms', ''),
#             'payment_terms': quote_data.pop('paymentTerms', ''),
#             'shipment_method': quote_data.pop('shipmentMethod', ''),
#             'shipment_destination': quote_data.pop('shipmentDestination', ''),
#             'door_address': quote_data.pop('doorAddress', ''),
#             'shipment_details': quote_data.pop('shipmentDetails', ''),
#         }

#         quote_serializer = QuoteSerializer(data=quote_data)
#         if quote_serializer.is_valid():
#             quote = quote_serializer.save()

#             # ✅ Save shipping details
#             if any(value for value in shipping_fields.values()):
#                 ShippingDetails.objects.create(quote=quote, **shipping_fields)

#             # ✅ Create conversation + participant
#             conversation = Conversation.objects.create(
#                 type='quote',
#                 quote=quote,
#                 name=f"Quote Chat: {quote.quote_number}"
#             )
#             ConversationParticipant.objects.create(
#                 conversation=conversation,
#                 user=request.user,
#                 role="Customer"
#             )

#             del request.session['temp_quote_data']
#             return Response(QuoteSerializer(quote).data, status=201)

#         return Response(quote_serializer.errors, status=400)



# from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response
# from rest_framework.views import APIView
# from .models import Quote
# from .serializers import QuoteSerializer

# # For Quote View for authenticated users
# class MyQuotesView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request):
#         quotes = Quote.objects.filter(user=request.user).order_by('-created_at')
#         serializer = QuoteSerializer(quotes, many=True)
#         return Response(serializer.data)


# # For Quote detail view for authenticated users
# from rest_framework.generics import RetrieveAPIView
# from .models import Quote
# from .serializers import QuoteDetailSerializer
# from rest_framework.permissions import IsAuthenticated

# class QuoteDetailView(RetrieveAPIView):
#     permission_classes = [IsAuthenticated]
#     serializer_class = QuoteDetailSerializer
#     queryset = Quote.objects.all()

#     def get_queryset(self):
#         # Only allow users to access their own quotes
#         return self.queryset.filter(user=self.request.user)



# from rest_framework.generics import RetrieveAPIView
# from rest_framework.permissions import IsAuthenticated
# from .models import QuoteResponse
# from .serializers import QuoteResponseSerializer

# class QuoteResponseDetailView(RetrieveAPIView):
#     permission_classes = [IsAuthenticated]
#     serializer_class = QuoteResponseSerializer

#     def get_queryset(self):
#         # Only show responses to quotes owned by the current user
#         return QuoteResponse.objects.filter(quote__user=self.request.user)


# this is working ======================================================================


from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from rest_framework.generics import RetrieveAPIView

from .serializers import QuoteSerializer, QuoteDetailSerializer, QuoteResponseSerializer
from .models import Quote, QuoteAttachment, ShippingDetails, QuoteResponse
from messaging.models import Conversation, ConversationParticipant

from rest_framework.generics import ListAPIView
from .models import QuoteTimeline
from .serializers import QuoteTimelineSerializer
from rest_framework.permissions import IsAuthenticated

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

from messaging.models import Conversation, Message, ConversationParticipant
from messaging.serializers import MessageSerializer, ConversationSerializer
from quotes.models import Quote
from orders.models import Order
from supplier.models import Supplier
from rest_framework import permissions

from rest_framework.views import APIView
from rest_framework.response import Response
from messaging.models import Conversation, Message

User = get_user_model()

class TempQuoteView(APIView):
    """
    Save quote temporarily in session if user is not authenticated
    """
    permission_classes = [AllowAny] 

    def post(self, request):
        quote_data = request.data
        request.session['temp_quote_data'] = quote_data
        return Response({"message": "Quote saved temporarily."}, status=200)


class FinalizeQuoteView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        quote_data = request.session.get('temp_quote_data')

        if not quote_data:
            return Response({"message": "No quote data found in session."}, status=400)

        quote_data['user'] = request.user.id
        quote_data['product_name'] = quote_data.pop('productName', '')
        quote_data['product_type'] = quote_data.pop('productType', '')

        shipping_fields = {
            'port_name': quote_data.pop('portName', ''),
            'destination_country': quote_data.pop('destinationCountry', ''),
            'shipment_terms': quote_data.pop('shipmentTerms', ''),
            'payment_terms': quote_data.pop('paymentTerms', ''),
            'shipment_method': quote_data.pop('shipmentMethod', ''),
            'shipment_destination': quote_data.pop('shipmentDestination', ''),
            'door_address': quote_data.pop('doorAddress', ''),
            'shipment_details': quote_data.pop('shipmentDetails', ''),
        }

        quote_serializer = QuoteSerializer(data=quote_data)
        if quote_serializer.is_valid():
            quote = quote_serializer.save()

            # ✅ Save shipping details
            if any(value for value in shipping_fields.values()):
                ShippingDetails.objects.create(quote=quote, **shipping_fields)

            # ✅ Create conversation + add requesting user as "Customer"
            conversation = Conversation.objects.create(
                type='quote',
                quote=quote,
                name=f"Quote Chat: {quote.quote_number}"
            )
            ConversationParticipant.objects.create(
                conversation=conversation,
                user=request.user,
                role="Customer"
            )

            # ✅ Optionally auto-add sourcing specialist/admin
            admin_user = User.objects.filter(is_staff=True).first()
            if admin_user and admin_user != request.user:
                ConversationParticipant.objects.get_or_create(
                    conversation=conversation,
                    user=admin_user,
                    role="Sourcing Specialist"
                )

            del request.session['temp_quote_data']
            return Response(QuoteSerializer(quote).data, status=201)

        return Response(quote_serializer.errors, status=400)


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .serializers import QuoteSerializer
from .models import Quote, ShippingDetails
from messaging.models import Conversation, ConversationParticipant
from django.contrib.auth import get_user_model

from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Quote, ShippingDetails
from .serializers import ShippingDetailsSerializer
from django.shortcuts import get_object_or_404



User = get_user_model()

class DirectQuoteCreateView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request):
        print("---- REQUEST DATA ----", request.data)
        print("---- FILES ----", request.FILES)

        data = request.data.copy()
        data['user'] = request.user.id

        # ✅ FORCE STRINGS from FormData
        data['product_name'] = str(data.pop('productName', '') or '')
        data['product_type'] = str(data.pop('productType', '') or '')

        shipping_fields = {
            'port_name': str(data.pop('portName', '') or ''),
            'destination_country': str(data.pop('destinationCountry', '') or ''),
            'shipment_terms': str(data.pop('shipmentTerms', '') or ''),
            'payment_terms': str(data.pop('paymentTerms', '') or ''),
            'shipment_method': str(data.pop('shipmentMethod', '') or ''),
            'shipment_destination': str(data.pop('shipmentDestination', '') or ''),
            'door_address': str(data.pop('doorAddress', '') or ''),
            'shipment_details': str(data.pop('shipmentDetails', '') or ''),
        }

        serializer = QuoteSerializer(data=data)
        if serializer.is_valid():
            quote = serializer.save()

            if any(value for value in shipping_fields.values()):
                ShippingDetails.objects.create(quote=quote, **shipping_fields)

            conversation = Conversation.objects.create(
                type='quote',
                quote=quote,
                name=f"Quote Chat: {quote.quote_number}"
            )
            ConversationParticipant.objects.create(
                conversation=conversation,
                user=request.user,
                role="Customer"
            )

            admin = User.objects.filter(is_staff=True).first()
            if admin and admin != request.user:
                ConversationParticipant.objects.get_or_create(
                    conversation=conversation,
                    user=admin,
                    role="Sourcing Specialist"
                )

            return Response(QuoteSerializer(quote).data, status=201)

        print("---- VALIDATION ERRORS ----", serializer.errors)
        return Response(serializer.errors, status=400)


class UpdateShippingView(generics.UpdateAPIView):
    serializer_class = ShippingDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        quote_id = self.kwargs.get("quote_id")
        quote = get_object_or_404(Quote, id=quote_id)

        #  ensure correct relation
        shipping, _ = ShippingDetails.objects.get_or_create(quote=quote)
        return shipping

    def patch(self, request, *args, **kwargs):
        shipping = self.get_object()
        serializer = self.get_serializer(shipping, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class MyQuotesView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        quotes = Quote.objects.filter(user=request.user).order_by('-created_at')
        serializer = QuoteSerializer(quotes, many=True)
        return Response(serializer.data)


class QuoteDetailView(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = QuoteDetailSerializer
    queryset = Quote.objects.all()

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)


class QuoteResponseDetailView(RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = QuoteResponseSerializer

    def get_queryset(self):
        return QuoteResponse.objects.filter(quote__user=self.request.user)



class QuoteTimelineView(ListAPIView):
    serializer_class = QuoteTimelineSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        quote_id = self.kwargs.get("quote_id")
        return QuoteTimeline.objects.filter(quote__id=quote_id).order_by("timestamp")










# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework.permissions import IsAuthenticated
# from messaging.models import Conversation, ConversationParticipant, Message
# from quotes.models import Quote
# from accounts.models import User

class UnlockSupplierView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, quote_id):
        try:
            quote = Quote.objects.get(id=quote_id)
            admin_user = User.objects.get(is_superuser=True)

            # Create or get conversation for this quote with type "supplier"
            conversation, created = Conversation.objects.get_or_create(
                type='supplier',
                quote=quote,
                name=f"Supplier Request - {quote.quote_number}"
            )

            # Add participants if not already there
            ConversationParticipant.objects.get_or_create(
                conversation=conversation,
                user=request.user,
                role="Customer"
            )
            ConversationParticipant.objects.get_or_create(
                conversation=conversation,
                user=admin_user,
                role="Admin"
            )

            # Add message
            Message.objects.create(
                conversation=conversation,
                sender=request.user,
                content="User has requested to unlock the supplier details for this quote."
            )

            return Response({"detail": "Request sent to admin."}, status=200)
        except Quote.DoesNotExist:
            return Response({"error": "Quote not found."}, status=404)
        except Exception as e:
            return Response({"error": str(e)}, status=500)





# class UnlockSupplierView(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request, quote_id):
#         try:
#             quote = Quote.objects.get(id=quote_id)

#             # Get or create the quote-based conversation
#             convo, _ = Conversation.objects.get_or_create(
#                 quote=quote, type='quote',
#                 defaults={'name': f"Quote: {quote.quote_number}"}
#             )

#             # Ensure current user is participant
#             if not ConversationParticipant.objects.filter(conversation=convo, user=request.user).exists():
#                 ConversationParticipant.objects.create(
#                     conversation=convo,
#                     user=request.user,
#                     role='Customer'
#                 )

#             # Ensure admin is participant
#             admin = User.objects.filter(is_staff=True).first()
#             if admin and not ConversationParticipant.objects.filter(conversation=convo, user=admin).exists():
#                 ConversationParticipant.objects.create(
#                     conversation=convo,
#                     user=admin,
#                     role='Admin'
#                 )

#             # Post unlock request message
#             Message.objects.create(
#                 conversation=convo,
#                 sender=request.user,
#                 content="User requested to unlock supplier."
#             )

#             return Response({"detail": "Unlock request sent to admin."}, status=200)

#         except Quote.DoesNotExist:
#             return Response({"error": "Quote not found."}, status=404)

#         except Exception as e:
#             return Response({"error": str(e)}, status=500)







































































































































# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status, permissions
# from django.contrib.auth import get_user_model
# from rest_framework.permissions import AllowAny
# from rest_framework.generics import RetrieveAPIView

# from .serializers import QuoteSerializer, QuoteDetailSerializer, QuoteResponseSerializer
# from .models import Quote, QuoteAttachment, ShippingDetails, QuoteResponse, QuoteTimeline  # ⬅️ Added QuoteTimeline
# from messaging.models import Conversation, ConversationParticipant

# User = get_user_model()

# class TempQuoteView(APIView):
#     """
#     Save quote temporarily in session if user is not authenticated
#     """
#     permission_classes = [AllowAny]

#     def post(self, request):
#         quote_data = request.data
#         request.session['temp_quote_data'] = quote_data
#         return Response({"message": "Quote saved temporarily."}, status=200)


# class FinalizeQuoteView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def post(self, request):
#         quote_data = request.session.get('temp_quote_data')

#         if not quote_data:
#             return Response({"message": "No quote data found in session."}, status=400)

#         quote_data['user'] = request.user.id
#         quote_data['product_name'] = quote_data.pop('productName', '')
#         quote_data['product_type'] = quote_data.pop('productType', '')

#         shipping_fields = {
#             'port_name': quote_data.pop('portName', ''),
#             'destination_country': quote_data.pop('destinationCountry', ''),
#             'shipment_terms': quote_data.pop('shipmentTerms', ''),
#             'payment_terms': quote_data.pop('paymentTerms', ''),
#             'shipment_method': quote_data.pop('shipmentMethod', ''),
#             'shipment_destination': quote_data.pop('shipmentDestination', ''),
#             'door_address': quote_data.pop('doorAddress', ''),
#             'shipment_details': quote_data.pop('shipmentDetails', ''),
#         }

#         quote_serializer = QuoteSerializer(data=quote_data)
#         if quote_serializer.is_valid():
#             quote = quote_serializer.save()

#             # ✅ Timeline: Quote submitted
#             QuoteTimeline.objects.create(
#                 quote=quote,
#                 title="Quote Submitted",
#                 description="The customer submitted a new quote."
#             )

#             # ✅ Save shipping details
#             if any(value for value in shipping_fields.values()):
#                 ShippingDetails.objects.create(quote=quote, **shipping_fields)
#                 QuoteTimeline.objects.create(
#                     quote=quote,
#                     title="Shipping Details Added",
#                     description="Shipping details were provided by the customer."
#                 )

#             # ✅ Create conversation + add requesting user as "Customer"
#             conversation = Conversation.objects.create(
#                 type='quote',
#                 quote=quote,
#                 name=f"Quote Chat: {quote.quote_number}"
#             )
#             ConversationParticipant.objects.create(
#                 conversation=conversation,
#                 user=request.user,
#                 role="Customer"
#             )

#             QuoteTimeline.objects.create(
#                 quote=quote,
#                 title="Conversation Created",
#                 description="A chat thread has been initiated for this quote."
#             )

#             # ✅ Optionally auto-add sourcing specialist/admin
#             admin_user = User.objects.filter(is_staff=True).first()
#             if admin_user and admin_user != request.user:
#                 ConversationParticipant.objects.get_or_create(
#                     conversation=conversation,
#                     user=admin_user,
#                     role="Sourcing Specialist"
#                 )
#                 QuoteTimeline.objects.create(
#                     quote=quote,
#                     title="Sourcing Specialist Assigned",
#                     description=f"{admin_user.get_full_name()} was added as a Sourcing Specialist."
#                 )

#             del request.session['temp_quote_data']
#             return Response(QuoteSerializer(quote).data, status=201)

#         return Response(quote_serializer.errors, status=400)


# class MyQuotesView(APIView):
#     permission_classes = [permissions.IsAuthenticated]

#     def get(self, request):
#         quotes = Quote.objects.filter(user=request.user).order_by('-created_at')
#         serializer = QuoteSerializer(quotes, many=True)
#         return Response(serializer.data)


# class QuoteDetailView(RetrieveAPIView):
#     permission_classes = [permissions.IsAuthenticated]
#     serializer_class = QuoteDetailSerializer
#     queryset = Quote.objects.all()

#     def get_queryset(self):
#         return self.queryset.filter(user=self.request.user)


# class QuoteResponseDetailView(RetrieveAPIView):
#     permission_classes = [permissions.IsAuthenticated]
#     serializer_class = QuoteResponseSerializer

#     def get_queryset(self):
#         return QuoteResponse.objects.filter(quote__user=self.request.user)

# from quotes.models import QuoteTimeline  # import your model
# from rest_framework.permissions import IsAuthenticated
# from rest_framework.views import APIView
# from rest_framework.response import Response

# class QuoteTimelineView(APIView):
#     permission_classes = [IsAuthenticated]

#     def get(self, request, pk):
#         quote = Quote.objects.filter(id=pk, user=request.user).first()
#         if not quote:
#             return Response({"detail": "Quote not found."}, status=404)

#         timeline_events = quote.timeline.order_by("timestamp")
#         data = [
#             {
#                 "event": t.title,
#                 "description": t.description,
#                 "date": t.timestamp.strftime('%b %d, %Y'),
#                 "time": t.timestamp.strftime('%I:%M %p'),
#                 "user": quote.user.get_full_name() or quote.user.username
#             }
#             for t in timeline_events
#         ]
#         return Response(data)
