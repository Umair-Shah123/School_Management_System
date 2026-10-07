from django.urls import path
from .views import create_student,get_students,get_by_id,delete_student,update_student

urlpatterns=[
    path('student_create/',create_student,name="create_student"),
    path('all/',get_students,name='get_students'),
    path('students/<int:id>',get_by_id,name='get_by_id'),
        path('students/<int:id>/update/',update_student,name='update_student'),
        path('students/<int:id>/delete',delete_student,name='delete_student')

    

]