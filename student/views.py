from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status
# Create your views here.
@api_view(['POST'])
def create_student(request):
    serializer=StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()    
        return Response(serializer.data,status=status.HTTP_201_CREATED)    
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_students(request):
    queryset=Student.objects.all()
    serializer=StudentSerializer(queryset,many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def get_by_id(request,id):
    try: 
        student=Student.objects.get(id=id)
    except Student.DoesNotExist:
        return Response({"error":"Student Not Found"},status=status.HTTP_404_NOT_FOUND)
    serializer=StudentSerializer(student)
    return Response(serializer.data)

@api_view(['PUT'])
def update_student(request,id):
    try: 
        student=Student.objects.get(id=id)
    except Student.DoesNotExist:
            return Response({"error":"Student Not Found"},status=status.HTTP_404_NOT_FOUND)
    serializer=StudentSerializer(student,data=request.data)
    if serializer.is_valid():
        serializer.save()    
        return Response(serializer.data,)    
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_student(request,id):
    try: 
     student=Student.objects.get(id=id)
    except Student.DoesNotExist:
            return Response({"error":"Student Not Found"},status=status.HTTP_404_NOT_FOUND)
    student.delete()
    return Response({"message:Student deleted successfully"},status=status.HTTP_204_NO_CONTENT)    
 


