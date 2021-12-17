from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from work import views
from rest_framework import routers

urlpatterns = [
    path('admin/', admin.site.urls),
    path('student/teachers/', views.student, name='student'),
    path('basic/', views.basic, name='basic'),
    path('student/', views.departments, name='departments'),
    path('student/curriculum/',views.curr, name='curriculum'),
    path('api/', include('work.urls')),
]

