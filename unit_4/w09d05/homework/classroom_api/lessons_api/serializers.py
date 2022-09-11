from rest_framework import serializers
from .models import Lessons

class LessonsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lessons
        fields = ('id', 'name', 'notes', 'date_of_lesson', 'needs_practice')