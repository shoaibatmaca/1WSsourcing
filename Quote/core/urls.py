# """
# URL configuration for core project.

# The `urlpatterns` list routes URLs to views. For more information please see:
#     https://docs.djangoproject.com/en/5.2/topics/http/urls/
# Examples:
# Function views
#     1. Add an import:  from my_app import views
#     2. Add a URL to urlpatterns:  path('', views.home, name='home')
# Class-based views
#     1. Add an import:  from other_app.views import Home
#     2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
# Including another URLconf
#     1. Import the include() function: from django.urls import include, path
#     2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
# """
# from django.contrib import admin
# from django.urls import path, include
# from quotes.views import (TempQuoteView, FinalizeQuoteView, MyQuotesView, QuoteDetailView,
#                 QuoteResponseDetailView)

# urlpatterns = [
#     path('admin/', admin.site.urls),
    
#     # For Quotes:
#     path('quote/temp-save/', TempQuoteView.as_view(), name='temp-quote'),
#     path('quote/finalize/', FinalizeQuoteView.as_view(), name='finalize-quote'),
#     path("quotes/my/", MyQuotesView.as_view(), name="my-quotes"),
#     path("quotes/<uuid:pk>/", QuoteDetailView.as_view(), name="quote-detail"),
#     path("quote-response/<uuid:pk>/", QuoteResponseDetailView.as_view(), name="quote-response-detail"),

    
    
#     # For Accounts:
#     path('auth/', include('djoser.urls')),  
#     path('auth/', include('djoser.urls.jwt')),
    
    
    
# ]


from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from quotes.views import (
    TempQuoteView,
    FinalizeQuoteView,
    MyQuotesView,
    QuoteDetailView, 
    QuoteTimelineView,
    QuoteResponseDetailView,
    DirectQuoteCreateView,
    UpdateShippingView,
    UnlockSupplierView
)
from messaging.views import( UserConversationsView,
    ConversationMessagesView,
    SendMessageView,
    GetOrCreateQuoteConversationView, 
    OrderConversationView,
    OrderMessageListCreateView,
    dashboard_stats,

)
from supplier.views import SupplierListAPIView, SupplierDetailAPIView
from orders.views import OrderDetailAPIView, OrderByQuoteView, MyOrdersView

from accounts.views import UserProfileUpdateView, ChangePasswordView, AccountPreferenceView, DeleteAccountView, LogoutAllView

urlpatterns = [
    path('admin/', admin.site.urls),

    # Quotes endpoints
    path('quote/temp-save/', TempQuoteView.as_view(), name='temp-quote'),
    path('quote/finalize/', FinalizeQuoteView.as_view(), name='finalize-quote'),
    path('quotes/create/', DirectQuoteCreateView.as_view(), name='quote-create'),
    path("quotes/my/", MyQuotesView.as_view(), name="my-quotes"),
    path("quotes/<uuid:pk>/", QuoteDetailView.as_view(), name="quote-detail"),
    path("quote-response/<uuid:pk>/", QuoteResponseDetailView.as_view(), name="quote-response-detail"),
    path("quotes/<uuid:quote_id>/timeline/", QuoteTimelineView.as_view(), name="quote-timeline"),
    path("quotes/<uuid:quote_id>/shipping/update/", UpdateShippingView.as_view(), name="update-shipping"),
    path('quotes/<uuid:quote_id>/unlock-supplier/', UnlockSupplierView.as_view(), name='unlock-supplier'),

    
    # For supplier:
    path('suppliers/', SupplierListAPIView.as_view(), name='supplier-list'),
    path('suppliers/<int:id>/', SupplierDetailAPIView.as_view(), name='supplier-detail'),


    # For orders
    path("orders/<uuid:id>/", OrderDetailAPIView.as_view(), name    ="order-detail"),
    path("orders/from-quote/<uuid:quote_id>/", OrderByQuoteView.as_view(), name="order-from-quote"),
    path("orders/my/", MyOrdersView.as_view(), name="my-orders"),
    path("api/orders/<uuid:order_id>/conversation/", OrderConversationView.as_view(), name="order-conversation"),
     path("api/orders/<uuid:order_id>/messages/", OrderMessageListCreateView.as_view(), name="order-messages"),

    

    # For messaging:
    # path("conversations/", MyConversationsView.as_view(), name="my-conversations"),
    # path("conversations/<int:pk>/", ConversationDetailView.as_view(), name="conversation-detail"),
    # path("conversations/<int:conversation_id>/send/", SendMessageView.as_view(), name="send-message"),

    # path("users/all/", AllUsersView.as_view(), name="all-users"),
    # path("conversations/get-or-create/", GetOrCreateDirectConversation.as_view(), name="get-or-create-direct"),
    
    path('api/messages/inbox/', UserConversationsView.as_view(), name='inbox-conversations'),
    path('api/messages/<int:conversation_id>/', ConversationMessagesView.as_view(), name='conversation-messages'),
    # path('api/messages/send/', SendMessageView.as_view(), name='send-message'),    
    path("api/messages/user-conversations/", UserConversationsView.as_view(), name="user-conversations"),
    path('api/quotes/<uuid:quote_id>/conversation/', GetOrCreateQuoteConversationView.as_view(), name='get-or-create-quote-conversation'),
    
    # For Statistics:
    path("api/dashboard/stats/", dashboard_stats),




    # For accounts:
    path('profile/', UserProfileUpdateView.as_view(), name='profile-update'),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('api/account/preferences/', AccountPreferenceView.as_view(), name='account-preferences'),
    path('api/account/delete/', DeleteAccountView.as_view(), name='delete-account'),
    path('api/account/logout-all/', LogoutAllView.as_view(), name='logout-all'),
    
    
    
    # Auth endpoints (Djoser)
    path('auth/', include('djoser.urls')),  
    path('auth/', include('djoser.urls.jwt')),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
