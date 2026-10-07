
from rest_framework import serializers
from .models import Attendance
from student.models import Student
from classroom.models import Classroom
from teacher.models import Teacher

class ClassSerailizer(serializers.ModelSerializer):
    class Meta:
      model=Classroom
      fields=['id','name','section']

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
      model=Teacher
      fields=['id','name']    

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['id','name','roll_no']

class AttendenceSerializer(serializers.ModelSerializer):
    student=StudentSerializer(read_only=True)
    classes=ClassSerailizer(read_only=True)
    teacher=TeacherSerializer(read_only=True)
    student_id = serializers.PrimaryKeyRelatedField(
        queryset=Student.objects.all(), source='student', write_only=True
    )
    classes_id = serializers.PrimaryKeyRelatedField(
        queryset=Classroom.objects.all(), source='classes',
        write_only=True, required=False, allow_null=True
    )
    teacher_id = serializers.PrimaryKeyRelatedField(
        queryset=Teacher.objects.all(), source='teacher',
        write_only=True, required=False, allow_null=True
    )
    class Meta:
        model=Attendance
        fields = ['id', 'student', 'teacher', 'classes', 'date', 'status',
                  'student_id', 'teacher_id', 'classes_id']