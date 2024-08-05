from django.db import models

class Invitation(models.Model):
    name = models.CharField(max_length=200, primary_key=True)
    attending = models.BooleanField()
    message = models.CharField(max_length=1000)
    hotel_needed = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)