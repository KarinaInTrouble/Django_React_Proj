from rest_framework import serializers
from .models import *

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class SpecialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Special
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class BookSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = BooksSection
        fields = '__all__'

class BookStructureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BooksStructure
        fields = '__all__'

class GiveBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = GiveBook
        fields = '__all__'

class CurriculumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Curriculum
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'