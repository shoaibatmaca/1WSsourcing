from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'ws/quotes/(?P<quote_id>[^/]+)/$', consumers.QuoteChatConsumer.as_asgi()),
]
