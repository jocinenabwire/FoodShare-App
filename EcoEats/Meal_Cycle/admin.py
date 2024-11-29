from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import Donor, FoodItem, FoodRequest

admin.site.register(Donor)
admin.site.register(FoodItem)
admin.site.register(FoodRequest)