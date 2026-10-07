from rest_framework import serializers
from .models import Classroom
from teacher.models import Teacher


class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = ['id', 'name']


class ClassSerializer(serializers.ModelSerializer):

    teacher = TeacherSerializer(read_only=True)

    class Meta:
        model = Classroom
        fields = ['id', 'name', 'section', 'teacher']