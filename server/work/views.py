from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

# Create your views here.

class DepartmentViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class SpecialViewSet(viewsets.ModelViewSet):
    queryset = Special.objects.all()
    serializer_class = SpecialSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class GiveBookViewSet(viewsets.ModelViewSet):
    queryset = GiveBook.objects.all()
    serializer_class = GiveBookSerializer

class BookSectionViewSet(viewsets.ModelViewSet):
    queryset = BooksSection.objects.all()
    serializer_class = BookSectionSerializer

class BookStructureViewSet(viewsets.ModelViewSet):
    queryset = BooksStructure.objects.all()
    serializer_class = BookStructureSerializer

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer

class CurriculumViewSet(viewsets.ModelViewSet):
    queryset = Curriculum.objects.all()
    serializer_class = CurriculumSerializer


class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer







def basic(request):
    return render(request,'work/students.html')


def student(request):
    departs = Department.objects.all()
    qs = None
    choice = request.GET.get('choice')
    if request.GET.get('button'):
        qs = Teacher.objects.filter(department=choice)

    return render(request, "work/students.html", {'departs':departs, 'qs':qs})

def departments(request):
    a = None
    if request.GET.get('show'):
        a = Department.objects.all()
    
    return render(request, "work/students.html", {'a':a})

def curr(request):
    plan = Curriculum.objects.all()
    result = None
    course = request.GET.get('course')
    semestr = request.GET.get('semestr')
    if request.GET.get('res'):
        result = Curriculum.objects.filter(course=course, semestr=semestr)
    
    return render(request, "work/students.html", {'plan':plan, 'result':result})