from django.urls import path 

from .views import (
    api_employee,
)

urlpatterns = [
    path("employee/", api_employee, name="api_employee")
]