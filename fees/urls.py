from django.urls import path
from .views import create_fees,get_fees,get_id,update_fees,delete_fees

urlpatterns=[

path('create_fees/',create_fees,name='create_fees'),
path('all/',get_fees,name='get_fees'),
path('<int:id>/',get_id,name='get_id'),
path('update_fees/<int:id>/',update_fees,name='update_fees'),
path('delete_fees/<int:id>/',delete_fees,name='delete_fees')

]