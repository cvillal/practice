from django.urls import path
from . import views

urlpatterns = [
    path('api/lessons', views.LessonsList.as_view(), name='lessons_list'),
    path('api/lessons/<int:pk>', views.LessonsDetail.as_view(), name='lessons_detail'),
]