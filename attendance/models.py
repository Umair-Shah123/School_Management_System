from django.db import models
from student.models import Student
from classroom.models import Classroom
from teacher.models import Teacher

# Create your models here.
class Attendance(models.Model):
    student=models.ForeignKey(Student,on_delete=models.CASCADE,related_name='attendance')
    classes=models.ForeignKey(Classroom,on_delete=models.CASCADE,related_name='attendance',null=True,blank=True)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='attendance',null=True,blank=True)
    date=models.DateField(auto_now=True)
    status=models.CharField(max_length=20)

    def __str__(self):
        return f'{self.student.name} -{self.date}-{self.status}'


