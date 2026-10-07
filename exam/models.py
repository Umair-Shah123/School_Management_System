from django.db import models
from subject.models import Subject
from student.models import Student
# Create your models here.
class Exam(models.Model):
    name=models.CharField(max_length=20)
    date=models.DateField()

    def __str__(self):
        return self.name

class Result(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,related_name='result')
    subject=models.ForeignKey(Subject,on_delete=models.CASCADE,related_name='result')
    exam=models.ForeignKey(Exam,on_delete=models.CASCADE,related_name='result')
    marks=models.IntegerField()

    def __str__(self):
        return f"{self.student.name} - {self.subject.name} - {self.marks}"    
