# accounts/serializers.py
from rest_framework import serializers
from .models import User
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        model = User
        fields = ('id', 'email', 'username', 'password', 'first_name', 'last_name', 'company', 'phone')




from djoser.serializers import UserSerializer as BaseUserSerializer
from .models import User

class CustomUserSerializer(BaseUserSerializer):
    class Meta(BaseUserSerializer.Meta):
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name',
                  'language', 'time_zone', 'currency']


class UserSerializer(serializers.ModelSerializer):
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'last_name', 'company', 'phone', 'profile_image', 'industry', 'date_joined')
        read_only_fields = ('id', 'email', 'date_joined')

    # def to_representation(self, instance):
    #     return {
    #         "id": instance.id,
    #         "email": instance.email,
    #         "name": instance.get_full_name() or instance.username,
    #     }

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep["name"] = instance.get_full_name() or instance.username
        return rep

    def get_profile_image(self, obj):
        request = self.context.get('request')
        if obj.profile_image and request:
            return request.build_absolute_uri(obj.profile_image.url)
        return None


from accounts.models import User
from rest_framework import serializers

class UserPublicSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name']

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['full_name'] = f"{instance.first_name} {instance.last_name}".strip()
        return data





from rest_framework import serializers
from .models import User
from django.conf import settings

class UserProfileUpdateSerializer(serializers.ModelSerializer):
    profile_image = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'first_name', 'last_name', 'email', 'company',
            'phone', 'profile_image', 'industry'
        ]
        read_only_fields = ['email']

    def get_profile_image(self, obj):
        request = self.context.get("request")
        if obj.profile_image and request:
            return request.build_absolute_uri(obj.profile_image.url)
        return None
