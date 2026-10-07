from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ClassSerializer
from .models import Classroom

# Create your views here.
@api_view(['POST'])
def create_class(request):
    serializer=ClassSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_class(request):
    classeroom=Classroom.objects.all()
    serializer=ClassSerializer(classeroom,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
      classroom=Classroom.objects.get(id=id)
    except Classroom.DoesNotExist:
        return Response({"message":"Class not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ClassSerializer(classroom)
    return Response(serializer.data)

@api_view (['PUT'])
def update_class(request,id):
    try:
        classroom=Classroom.objects.get(id=id)
    except:
        return Response({"message":"Class not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=ClassSerializer(classroom,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_class(request,id):
    try:
        classroom=Classroom.objects.get(id=id)
    except:
        return Response({"message":"Class not found"},status=status.HTTP_404_NOT_FOUND)  
    classroom.delete()
    return Response({"message:Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

      
