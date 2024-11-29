from django.db import models

# Create your models here.

class Donor(models.Model):
    name = models.CharField(max_length=100)
    contact = models.CharField(max_length=15)
    location = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class FoodItem(models.Model):
    donor = models.ForeignKey(Donor, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    expiry_date = models.DateField()

    def __str__(self):
        return self.name

class FoodRequest(models.Model):
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    requestor_name = models.CharField(max_length=100)
    request_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Request for {self.food_item.name} by {self.requestor_name}"