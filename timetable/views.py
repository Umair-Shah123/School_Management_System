from django.shortcuts import render


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import TimeSerializer
from .models import Timetable

# Create your views here.
@api_view(['POST'])
def create_time(request):
    serializer=TimeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_time(request):
    time=Timetable.objects.all()
    serializer=TimeSerializer(time,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
        time=Timetable.objects.get(id=id)
    except Timetable.DoesNotExist:
        return Response({"message":"Subject not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=TimeSerializer(time)
    return Response(serializer.data)

@api_view (['PUT'])
def update_time(request,id):
    try:
        subject=Timetable.objects.get(id=id)
    except:
        return Response({"message":"Timetable not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=TimeSerializer(subject,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_time(request,id):
    try:
        time=Timetable.objects.get(id=id)
    except:
        return Response({"message":"Timetable not found"},status=status.HTTP_404_NOT_FOUND)  
    time.delete()
    return Response({"message:Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

      
