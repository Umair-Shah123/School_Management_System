from django.db import models
from teacher.models import Teacher

# Create your models here.
class Classroom(models.Model):
    name=models.CharField(max_length=20)
    section=models.CharField(max_length=20)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='classroom')

