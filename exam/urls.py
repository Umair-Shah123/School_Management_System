from django.urls import path
from .views import create_exam,get_exam,get_id,update_exam,delete_exam,create_result,get_result,get_id,update_result,delete_result
urlpatterns=[
    path('create_exam/',create_exam,name='create_exam'),
    path('all/',get_exam,name='get_exam'),
    path('<int:id>',get_id,name='get_id'),
    path('update_exam/<int:id>/',update_exam,name='update_exam'),
    path('delete_exam/<int:id>/',delete_exam,name='delete_exam'),

#Result
    path('create_result/',create_result,name='create_result'),
    path('get_result/',get_result,name='get_result'),
    path('result/<int:id>/',get_id,name='get_id'),
    path('update_result/<int:id>/',update_result,name='update_result'),
    path('delete_result/<int:id>/',delete_result,name='delete_result')
    


]