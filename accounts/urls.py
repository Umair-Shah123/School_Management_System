from django.urls import path
from .views import LoginView,AdminTestView

urlpatterns=[

    path('login/',LoginView.as_view(),name='login'),
    path('admin-test/',AdminTestView.as_view(),name='admin-test')
]