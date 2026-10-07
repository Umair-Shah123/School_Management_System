from rest_framework import serializers
from .models import Timetable
from subject.models import Subject
from classroom.models import Classroom
from teacher.models import Teacher


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model=Subject
        fields=['id','name']

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model=Classroom      
        fields=['id','name','section'] 
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=Teacher
        fields=['id','name']         

class TimeSerializer(serializers.ModelSerializer):
    subject=SubjectSerializer(read_only=True)
    classroom=ClassSerializer(read_only=True)
    teacher=TeacherSerializer(read_only=True)
    class Meta:
        model=Timetable
        fields=['id','day','subject','teacher','classroom','start_time']