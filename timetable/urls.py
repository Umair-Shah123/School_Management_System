from django.urls import path
from .views import create_time,get_time,get_id,update_time,delete_time
urlpatterns=[
    path('create_time/',create_time,name='create_name'),
    path('all/',get_time,name='get_time'),
    path('get_id/<int:id>/',get_id,name='get_id'),
    path('update_time/<int:id>/',update_time,name='update_time'),
    path('delete_time/<int:id>/',delete_time,name='delete_time')


]