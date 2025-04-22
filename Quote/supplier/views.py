from rest_framework import generics
from .models import Supplier
from .serializers import SupplierSerializer
from rest_framework.permissions import AllowAny

class SupplierListAPIView(generics.ListAPIView):
    queryset = Supplier.objects.all().order_by('-date_added')
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]  # Or IsAuthenticated if needed

class SupplierDetailAPIView(generics.RetrieveAPIView):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'  # or use 'pk' if preferred
        