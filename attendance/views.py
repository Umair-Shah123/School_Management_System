from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Attendance
from .serializers import AttendenceSerializer 

# Create your views here.
@api_view(['POST'])
def create_atendance(request):
    serializer=AttendenceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_attendance(request):
    attendance=Attendance.objects.all()
    serializer=AttendenceSerializer(attendance,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
      attendance=Attendance.objects.get(id=id)
    except Attendance.DoesNotExist:
        return Response({'message':'Student with this id not found'},status=status.HTTP_404_NOT_FOUND)
    serializer=AttendenceSerializer(attendance)
    return Response(serializer.data)

@api_view(['PUT'])
def update_attendance(request,id):
    try:
      attendance=Attendance.objects.get(id=id)
    except Attendance.DoesNotExist:
        return Response({'message':'Student with this id not found'},status=status.HTTP_404_NOT_FOUND) 
    serializer=AttendenceSerializer(attendance,data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response({'message':'Student with this id not found'},status=status.HTTP_404_NOT_FOUND) 

@api_view(['DELETE'])
def delete_attendance(request,id):
     try:
          attendance=Attendance.objects.get(id=id)
     except Attendance.DoesNotExist:
            return Response({'message':'Student with this id not found'},status=status.HTTP_404_NOT_FOUND) 
     attendance.delete()
     return Response({"message:Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      

     



       