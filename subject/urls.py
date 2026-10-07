from django.urls import path
from .views import create_subject,get_subject,get_id,update_subject,delete_subject

urlpatterns=[
    path('create_subject/',create_subject,name="create_subject"),
    path('all/',get_subject,name='get_subject'),
    path('<int:id>/',get_id,name='get_id'),
    path('update_subject/<int:id>/',update_subject,name='update_subject'),
    path('delete_subject/<int:id>/',delete_subject,name='delete_subject')

]