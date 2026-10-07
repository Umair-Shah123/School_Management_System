from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Teacher
from .serializers import TeacherSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
@api_view(['POST'])
def create_teacher(request):
    serializer=TeacherSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_teacher(request):
    queryset=Teacher.objects.all()
    serializer=TeacherSerializer(queryset,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_by_id(request,id):
    try:
        teacher=Teacher.objects.get(id=id)
    except Teacher.DoesNotExist:
        return Response({'message':'Teacher Not Found'},status=status.HTTP_404_NOT_FOUND)
    serializer=TeacherSerializer(teacher)
    return Response(serializer.data)

@api_view(['PUT'])
def update_teacher(request,id):
       try:
            teacher=Teacher.objects.get(id=id)
       except Teacher.DoesNotExist:
            return Response({'message':'Teacher Not Found'},status=status.HTTP_404_NOT_FOUND)
       serializer=TeacherSerializer(teacher,data=request.data)
       if serializer.is_valid():
          serializer.save()
          return Response(serializer.data,status=status.HTTP_201_CREATED)

@api_view(['DELETE'])
def delete_teacher(request,id):
    try:
       teacher=Teacher.objects.get(id=id)
    except Teacher.DoesNotExist:
        return Response({'message':'Teacher Not Found'},status=status.HTTP_404_NOT_FOUND)
    teacher.delete()
    return Response({'message':'Deleted Successfully'},status=status.HTTP_204_NO_CONTENT)
           


     

    

