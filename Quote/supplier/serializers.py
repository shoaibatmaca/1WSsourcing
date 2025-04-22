from rest_framework import serializers
from .models import (
    Supplier, SupplierCertification, SupplierContact,
    SupplierProduct, UnlockedSupplier, SupplierReview
)

class SupplierCertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierCertification
        fields = '__all__'

class SupplierContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierContact
        fields = '__all__'

class SupplierProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierProduct
        fields = '__all__'


# class SupplierReviewSerializer(serializers.ModelSerializer):
#     user_name = serializers.SerializerMethodField()
#     # user_company = serializers.CharField(source="company")  # assuming this is a field
#     user_company = serializers.SerializerMethodField()


#     class Meta:
#         model = SupplierReview
#         fields = ['id', 'rating', 'comment', 'created_at', 'user_name', 'user_company']

#     def get_user_name(self, obj):
#         return obj.user.get_full_name()  # pulls first_name + last_name

class SupplierReviewSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()
    user_company = serializers.SerializerMethodField()

    class Meta:
        model = SupplierReview
        fields = ['id', 'rating', 'comment', 'created_at', 'user_name', 'user_company']

    def get_user_name(self, obj):
        return obj.user.get_full_name()

    def get_user_company(self, obj):
        return obj.user.company or ""




class SupplierSerializer(serializers.ModelSerializer):
    certifications = SupplierCertificationSerializer(many=True, read_only=True)
    contact = SupplierContactSerializer(read_only=True)
    products = SupplierProductSerializer(many=True, read_only=True)
    reviews = SupplierReviewSerializer(many=True, read_only=True)
    rating = serializers.SerializerMethodField()



    class Meta:
        model = Supplier
        fields = '__all__'
    
    def get_rating(self, obj):
        reviews = obj.reviews.all()
        if not reviews.exists():
            return None
        return round(sum(r.rating for r in reviews) / reviews.count(), 1)
        


