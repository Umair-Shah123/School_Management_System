from django.urls import path
from .views import create_teacher,get_teacher,get_by_id,update_teacher,delete_teacher
urlpatterns=[
    path('create_teacher/',create_teacher,name="create_teacher"),
    path('all/',get_teacher,name='get_teacher'),
    path('teacher/<int:id>/',get_by_id,name='get_by_id'),
    path('teacher/<int:id>/update/',update_teacher,name='update_teacher'),
    path('teacher/<int:id>/delete/',delete_teacher,name='delete_teacher')

    

]