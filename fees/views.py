from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .models import Fees
from .serializers import FeesSerializer
# Create your views here.
@api_view(['POST'])
def create_fees(request):
    serializer=FeesSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_fees(request):
    fees=Fees.objects.all()
    serializer=FeesSerializer(fees,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_id(request,id):
    try:
      fees=Fees.objects.get(id=id)
    except Fees.DoesNotExist:
        return Response({"message":"Fees with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=FeesSerializer(fees)
    return Response(serializer.data)

@api_view (['PUT'])
def update_fees(request,id):
    try:
        fees=Fees.objects.get(id=id)
    except:
        return Response({"message":"Fees with this id not found"},status=status.HTTP_404_NOT_FOUND)
    serializer=FeesSerializer(fees,data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_fees(request,id):
    try:
        fees=Fees.objects.get(id=id)
    except:
        return Response({"message":"Fees with this id not found"},status=status.HTTP_404_NOT_FOUND)  
    fees.delete()
    return Response({"message":"Deleted Successfully"},status=status.HTTP_204_NO_CONTENT)      
