from django.db import models
from classroom.models import Classroom
from teacher.models import Teacher
from subject.models import Subject

# Create your models here.
class Timetable(models.Model):
    classroom=models.ForeignKey(Classroom,on_delete=models.CASCADE,related_name='timetable')
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE,related_name='timetable')
    subject=models.ForeignKey(Subject,on_delete=models.CASCADE,related_name='timetable')
    day=models.CharField(max_length=20,choices=[('Monday','Monday'),
                         ('Tuesday','Tuesday'),
                         ('Wednesday','Wednesday'),
                         ('Thursday','Thursday'),
                         ('Friday', 'Friday'),
                         ('Saturday', 'Saturday'),
    ])
    start_time=models.TimeField()
    end_time=models.TimeField()

    def __str__(self):
        return f"{self.teacher.name} - {self.subject.name} -{self.day} -{self.start_time} -{self.end_time}"