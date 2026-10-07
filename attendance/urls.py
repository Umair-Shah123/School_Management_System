from django.urls import path
from .views import create_atendance,get_attendance,get_id,update_attendance,delete_attendance
urlpatterns=[
    path('create_attendance/',create_atendance,name='create_atendance'),
    path('all/',get_attendance,name='get_attendance'),
    path('<int:id>/',get_id,name='get_id'),
    path('update_attendance/<int:id>/',update_attendance,name='update_attendance'),
    path('delete_attendance/<int:id>/',delete_attendance,name='delete_attendance')


]