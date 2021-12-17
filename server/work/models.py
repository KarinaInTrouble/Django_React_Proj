from django.db import models
from datetime import date
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class Department(models.Model):
    id = models.CharField(primary_key=True, max_length=3, verbose_name="Код кафедры")
    name = models.CharField(max_length=50,  verbose_name="Наименование кафедры")
    def __str__(self):
        return f"{self.id}, {self.name}"
    class Meta:
        verbose_name_plural = "Кафедры"


class Teacher(models.Model):
    id = models.CharField(primary_key=True, max_length=3,  verbose_name="Код преподавателя")
    surname = models.CharField(max_length=50,  verbose_name="ФИО преподавателя") 
    department = models.ForeignKey(Department, on_delete = models.CASCADE ,  verbose_name="Код кафедры")
    def __str__(self):
        return f"{self.id}, {self.surname}"
    class Meta:
        verbose_name_plural = "Преподаватели"

class Special(models.Model):
    id = models.CharField(primary_key=True, max_length=8,  verbose_name="Код специальности")
    name = models.CharField(max_length=50,  verbose_name="Наименование") 
    def __str__(self):
        return f"{self.id}, {self.name}"
    class Meta:
        verbose_name_plural = "Специальности"

class Book(models.Model):
    id = models.AutoField(primary_key=True,  verbose_name="Код учебника")
    name = models.CharField(max_length=50, verbose_name="Наименование")
    sertificate = models.CharField(max_length=9, verbose_name="Сертификат")
    certification_year = models.DateField(verbose_name="Год сертификации", validators=[MaxValueValidator(limit_value=date.today)])
    special_id = models.ForeignKey(Special, on_delete = models.CASCADE, verbose_name="Специальность")
    pages = models.PositiveIntegerField(verbose_name="Количество страниц")
    pictures = models.PositiveIntegerField(verbose_name="Количество рисунков")
    def __str__(self):
        return f"{self.name}"
    class Meta:
        verbose_name_plural = "Учебники"

class Author(models.Model):
    book = models.ForeignKey(Book, on_delete = models.CASCADE, verbose_name="Код учебника")
    author = models.ForeignKey(Teacher, on_delete = models.DO_NOTHING, verbose_name="Код автора")
    def __str__(self):
        return f"{self.id}"
    class Meta:
        verbose_name_plural = "Авторы"

class Student(models.Model):
    c_choices = [('1','1'),
                ('2','2'),
                ('3','3'),
                ('4','4')]
    id = models.AutoField(primary_key=True, verbose_name="Код студента")
    surname = models.CharField(max_length=50, verbose_name="ФИО студента") 
    transcript_number = models.CharField(max_length=9, verbose_name="Номер зачетной книжки")
    special = models.ForeignKey(Special, on_delete = models.CASCADE, verbose_name="Код специальности")
    admission_year = models.DateField(verbose_name="Год поступления", validators=[MinValueValidator(limit_value=date(2017,8,30))])
    course = models.CharField(max_length=5, choices=c_choices, verbose_name="Курс")
    def __str__(self):
        return f"{self.id}, {self.surname}"
    class Meta:
        verbose_name_plural = "Студенты"
    

class GiveBook(models.Model):
    date = models.DateField(verbose_name="Дата выдачи учебника", validators=[MaxValueValidator(limit_value=date.today)])
    student = models.ForeignKey(Student, on_delete = models.CASCADE, verbose_name="Студент")
    book = models.ForeignKey(Book, on_delete = models.CASCADE, verbose_name="Учебник")
    def __str__(self):
        return f"{self.student}, {self.book}"
    class Meta:
        verbose_name_plural = "Выдача учебников"

class Curriculum(models.Model):
    s_choices = [('1','1'),('2','2')]
    c_choices = [('1','1'),
                ('2','2'),
                ('3','3'),
                ('4','4')]
    special = models.ForeignKey(Special, on_delete = models.CASCADE, verbose_name="Специальность")
    discipline = models.CharField(max_length=50, verbose_name="Дисциплина")
    course = models.CharField(max_length=5, choices=c_choices, verbose_name="Курс")
    semestr = models.CharField(max_length=5, choices=s_choices, verbose_name="Семестр")
    def __str__(self):
        return f"{self.discipline}"
    class Meta:
        verbose_name_plural = "Учебный план"

class BooksSection(models.Model):
    id = models.AutoField(primary_key=True, verbose_name="Код раздела учебника")
    name = models.CharField(max_length=50, verbose_name="Название раздела учебника")
    def __str__(self):
        return f"{self.id}, {self.name}"
    class Meta:
        verbose_name_plural = "Разделы учебника"

class BooksStructure(models.Model):
    book = models.ForeignKey(Book, on_delete = models.CASCADE, verbose_name="Код учебника")
    section = models.ForeignKey(BooksSection, on_delete = models.CASCADE, verbose_name="Код раздела учебника")
    class Meta:
        verbose_name_plural = "Состав учебника"