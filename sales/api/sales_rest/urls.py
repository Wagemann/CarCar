from django.urls import path 

from .views import (
    api_list_employees,
    api_employee,
    api_list_customers,
    api_customer,
    api_list_records,
    api_record,
)

urlpatterns = [
    path(
        "employee/",
        api_list_employees,
        name="api_list_employees",
    ),

    path(
        "employee/<int:id>/",
        api_employee,
        name="api_employee",
    ),
    path(
        "customer/",
        api_list_customers,
        name="api_list_customers",
    ),
    path(
        "customer/<int:id>/",
        api_customer,
        name="api_customer",
    ),
    path(
        "record/",
        api_list_records,
        name="api_list_records"
    ),
        path(
        "record/<int:id>/",
        api_record,
        name="api_record"
    ),
]