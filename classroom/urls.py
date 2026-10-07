from rest_framework.urls import path
from .views import create_class,get_class,get_id,update_class,delete_class

urlpatterns=[

    path('create_class/',create_class,name='create_class'),
    path('all/',get_class,name='get_class'),
    path('<int:id>/',get_id,name='get_id'),
    path('update_class/<int:id>/',update_class,name='update_class'),
    path('delete_class/<int:id>/',delete_class,name='delete_class')
    
]