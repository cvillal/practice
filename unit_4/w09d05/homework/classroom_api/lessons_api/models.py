from django.db import models

# Create your models here.

class Lessons (models.Model):
    name = models.CharField(max_length = 50)
    notes = models.TextField()
    date_of_lesson = models.DateField()
    needs_practice = models.BooleanField(null = True)

