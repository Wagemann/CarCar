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
        "id",
        "employee_name",
        "employee_number"
        "customer_name",
        "vin",
        "price",
    ]
    encoders = {
        "employee_name": EmployeeEncoder(),
        "employee_number": EmployeeEncoder,
        "customer_name": CustomerEncoder(),
        "vin": AutombileEncoder(),
    }

class RecordDetailEncoder(ModelEncoder):
    model = Record
    properties = [
        "employee_name"
        "customer_name"
        "vin"
        "price"
    ]
    encoders = {
        "employee_name": EmployeeEncoder(),
        "customer_name": CustomerEncoder(),
        "vin": AutombileEncoder(),
    }

@require_http_methods("GET, POST")
def api_employee(request):
    if request.method =="GET":
        employee = Employee.objects.all()
        return JsonResponse(
            {"employees": employees},
            encoder=EmployeeEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            employee_id = content["employee_id"]
            employee = Employee.objects.get(pk=employee_id)
            content["employee"] = employee
            employed = Employee.objects.create(**content)
            return JsonResponse(
                employed,
                encoder=Employee,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Employee"}
            )
            response.status_code = 400
            return response


