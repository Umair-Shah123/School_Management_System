from django.db import models
from teacher.models import Teacher
from classroom.models import Classroom

# Create your models here.
class Subject(models.Model):
    name=models.CharField(max_length=20)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='subjects',null=True,blank=True)
    classes=models.ForeignKey(Classroom,on_delete=models.CASCADE,related_name='subjects',null=True,blank=True)
    def __str__(self):
        return self.name
 