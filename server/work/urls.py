from django.urls import path, include
from rest_framework import routers
#from mainapp.views import index
from .views import *

router = routers.DefaultRouter()
router.register('departments', DepartmentViewSet, basename='departments')
router.register('teachers', TeacherViewSet, basename='teachers')
router.register('special', SpecialViewSet, basename='special')
router.register('student', StudentViewSet, basename='student')
router.register('book', BookViewSet, basename='book')
router.register('booksection', BookSectionViewSet, basename='booksection')
router.register('bookstructure', BookStructureViewSet, basename='bookstructure')
router.register('author', AuthorViewSet, basename='author')
router.register('curriculum', CurriculumViewSet, basename='curriculum')
router.register('givebook', GiveBookViewSet, basename='givebook')

urlpatterns = []
urlpatterns += router.urls