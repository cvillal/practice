from django.db import models

# Create your models here.

class Companies(models.Model):
    name = models.CharField(max_length = 32)
    industryProps = models.CharField(max_length = 52)