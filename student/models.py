from django.db import models
from accounts.models import User
from classroom.models import Classroom
# Create your models here.
class Student(models.Model):
    name=models.CharField(max_length=20)
    roll_no=models.IntegerField()
    class_name=models.CharField(max_length=20)
    class_room=models.ForeignKey(Classroom,on_delete=models.CASCADE,related_name='students',null=True,blank=True)

    def __str__(self):
        return self.name    
