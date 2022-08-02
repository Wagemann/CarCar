from pyexpat import model
from django.http import JsonResponse
from django.shortcuts import render
from django,http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json

from .models import AutomobileVO, Customer, Employee, Record

class AutombileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "model",
        "color",
        "year",
        "vin",
    ]

class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "id",
        "employee_name",
        "employee_id",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "customer_name",
        "address",
        "phone_number"
    ]

class RecordListEncoder(ModelEncoder):
    model = Record
    properties = [
        "name",
        "employee_number"
        "name",
        "vin",
        "price",
    ]
    encoders = {
        "employee": EmployeeEncoder(),
        "employee_number": EmployeeEncoder,
        "name": CustomerEncoder(),
        "vin": AutombileEncoder(),
    }

class RecordDetailEncoder(ModelEncoder):
    model = Record
    properties = [
        "emplo"
    ]