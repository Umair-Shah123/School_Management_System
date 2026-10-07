from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Exam,Result
from .serializers import ExamSerializer,ResultSerializer


# Create your views here.
@api_view(['POST'])
def create_exam(request):
    serializer=ExamSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_exam(request):
    exam=Exam.objects.all()
    serializer=ExamSerializer(exam,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
      exam=Exam.objects.get(id=id)
    except Exam.DoesNotExist:
        return Response({"message":"Exam with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ExamSerializer(exam)
    return Response(serializer.data)

@api_view (['PUT'])
def update_exam(request,id):
    try:
        exam=Exam.objects.get(id=id)
    except:
        return Response({"message":"Exam with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ExamSerializer(exam,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_exam(request,id):
    try:
        exam=Exam.objects.get(id=id)
    except:
        return Response({"message":"Exam with this id not found"},status=status.HTTP_404_NOT_FOUND)  
    exam.delete()
    return Response({"message":"Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

#  <--- Result CRUD --->
    
@api_view(['POST'])
def create_result(request):
    serializer=ResultSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_result(request):
    result=Result.objects.all()
    serializer=ResultSerializer(result,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
      result=Result.objects.get(id=id)
    except Result.DoesNotExist:
        return Response({"message":"Result with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ResultSerializer(result)
    return Response(serializer.data)

@api_view (['PUT'])
def update_result(request,id):
    try:
        result=Result.objects.get(id=id)
    except:
        return Response({"message":"Result with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ResultSerializer(result,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_result(request,id):
    try:
        result=Result.objects.get(id=id)
    except:
        return Response({"message":"Result with this id not found"},status=status.HTTP_404_NOT_FOUND)  
    result.delete()
    return Response({"message":"Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

    