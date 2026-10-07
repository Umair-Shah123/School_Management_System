from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import SubjectSerializer
from .models import Subject

# Create your views here.
@api_view(['POST'])
def create_subject(request):
    serializer=SubjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_subject(request):
    subject=Subject.objects.all()
    serializer=SubjectSerializer(subject,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
        subject=Subject.objects.get(id=id)
    except Subject.DoesNotExist:
        return Response({"message":"Subject not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=SubjectSerializer(subject)
    return Response(serializer.data)

@api_view (['PUT'])
def update_subject(request,id):
    try:
        subject=Subject.objects.get(id=id)
    except:
        return Response({"message":"Subject not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=SubjectSerializer(subject,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_subject(request,id):
    try:
        subject=Subject.objects.get(id=id)
    except:
        return Response({"message":"Subject not found"},status=status.HTTP_404_NOT_FOUND)  
    subject.delete()
    return Response({"message:Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

      
