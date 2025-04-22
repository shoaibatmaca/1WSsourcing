from django.db import models 
from django.contrib.auth.models import AbstractUser 
from django.utils.translation import gettext_lazy as _

class User(AbstractUser): 
    """Custom user model with additional fields""" 
    email = models.EmailField(_('email address'), unique=True) 
    company = models.CharField(max_length=255, blank=True) 
    phone = models.CharField(max_length=20, blank=True) 
    profile_image = models.ImageField(upload_to='profile_images/', blank=True, null=True) 
    industry = models.CharField(max_length=100, blank=True) 
    language = models.CharField(max_length=20, default="English", blank=True, null=True)
    time_zone = models.CharField(max_length=50, default="UTC", blank=True, null=True)
    currency = models.CharField(max_length=10, default="USD", blank=True, null=True)
     
    USERNAME_FIELD = 'email' 
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name'] 
     
    def __str__(self): 
        return self.email



