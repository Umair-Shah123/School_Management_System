from rest_framework import serializers
from .models import Fees
from student.models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields=['id','name']
class FeesSerializer(serializers.ModelSerializer):
    student=StudentSerializer(read_only=True)
    class Meta:
        model=Fees
        fields=['id','student','due_date','amount','status']