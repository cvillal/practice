from django.shortcuts import render

from rest_framework import generics
from .serializers import LessonsSerializer
from .models import Lessons
# Create your views here.

class LessonsList(generics.ListCreateAPIView):
    queryset = Lessons.objects.all().order_by('id')
    serializer_class = LessonsSerializer

class LessonsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lessons.objects.all().order_by('id')
    serializer_class = LessonsSerializer
