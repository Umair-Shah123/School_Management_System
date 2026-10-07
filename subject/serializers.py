from rest_framework import serializers
from .models import Subject
from teacher.models import Teacher
from classroom.models import Classroom



class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=Teacher    
        fields=['id','name']


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model=Classroom 
        fields=['id','name','section']
class SubjectSerializer(serializers.ModelSerializer):
    teacher=TeacherSerializer(read_only=True)
    classes=ClassSerializer(read_only=True)
    class Meta:
        model=Subject
        fields=['id','name','teacher','classes']
    