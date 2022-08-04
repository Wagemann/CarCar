import json
from django.http import JsonResponse
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder

from .models import AutomobileVO, Customer, Employee, Record

class AutomobileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
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
        # "employee",
        # "employee_id",
        "price",
    ]
    encoders = {
        "employee": EmployeeEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileEncoder(),
    }
    def get_extra_data(self,o):
        return {"customer_name" : o.customer.customer_name,
        "employee_name": o.employee.employee_name,
        "employee_id" : o.employee.employee_id,
        "vin": o.automobile.vin }

class RecordDetailEncoder(ModelEncoder):
    model = Record
    properties = [
        "id",
        "price",
    ]
    encoders = {
        "employee": EmployeeEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileEncoder(),
    }
    def get_extra_data(self,o):
        return {"customer_name" : o.customer.customer_name, 
        "employee_name" : o.employee.employee_name,
        "vin": o.automobile.vin }    

@require_http_methods("GET, POST")
def api_list_employees(request):
    if request.method =="GET":
        employee = Employee.objects.all()
        return JsonResponse(
            {"employee": employee},
            encoder=EmployeeEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            employed = Employee.objects.create(**content)
            return JsonResponse(
                employed,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Employee"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_employee(request, id):
    if request.method == "GET":
        try:
            employee = Employee.objects.get(id=id)
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except Employee.DoesNotExist:
            return JsonResponse({"message": "Employee has been terminated or does not exist."})
    elif request.method == "DELETE":
        try:
            employee = Employee.objects.get(id=id)
            employee.delete()
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except Employee.DoesNotExist:
            return JsonResponse({"message": "Employee has been terminated or does not exist."})
    else:#Put
        try:
            content = json.loads(request.body)
            employee = Employee.objects.get(id=id)

            props = ["employee_name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(employee, prop, content[prop])
            employee.save()
            return JsonResponse(
                employee,
                encoder=EmployeeEncoder,
                safe=False,
            )
        except Employee.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response

@require_http_methods("GET, POST")
def api_list_customers(request):
    if request.method =="GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create Customer"}
            )
            response.status_code = 400
            return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, id):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist."})
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Customer does not exist."})
    else:#Put
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=id)

            props = ["customer_name", "address", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer does not exist"})
            response.status_code = 404
            return response

@require_http_methods("GET, POST")
def api_list_records(request):
    if request.method =="GET":
        records = Record.objects.all()
        return JsonResponse(
            {"records": records},
            encoder=RecordListEncoder,
            safe=False,
        )
    else:#Post
            content = json.loads(request.body)

            employee_id = content["employee_id"]
            employee = Employee.objects.get(pk=employee_id)
            content["employee"] = employee           
            customer_id = content["customer_id"]
            customer = Customer.objects.get(pk=customer_id)
            content["customer"] = customer
            vin_id = content["automobile"]
            automobile = AutomobileVO.objects.get(pk=vin_id)
            content["automobile"] = automobile
            record = Record.objects.create(**content)
            return JsonResponse(
                record,
                encoder=RecordListEncoder,
                safe=False,
            )
        # except:
        #     response = JsonResponse(
        #         {"message": "Could not create Record"}
        #     )
        #     response.status_code = 400
        #     return response

@require_http_methods(["DELETE", "GET", "PUT"])
def api_record(request, id):
    if request.method == "GET":
        try:
            record = Record.objects.get(id=id)
            return JsonResponse(
                record,
                encoder=RecordDetailEncoder,
                safe=False,
            )
        except Record.DoesNotExist:
            return JsonResponse({"message": "Record does not exist."})
    elif request.method == "DELETE":
        try:
            record = Record.objects.get(id=id)
            record.delete()
            return JsonResponse(
                record,
                encoder=RecordDetailEncoder,
                safe=False,
            )
        except Record.DoesNotExist:
            return JsonResponse({"message": "Record does not exist."})
    else:#Put
        try:
            content = json.loads(request.body)
            record = Record.objects.get(id=id)

            props = ["employee_name", "customer_name", "vin", "price"]
            for prop in props:
                if prop in content:
                    setattr(record, prop, content[prop])
            record.save()
            return JsonResponse(
                record,
                encoder=RecordDetailEncoder,
                safe=False,
            )
        except Record.DoesNotExist:
            response = JsonResponse({"message": "Record does not exist"})
            response.status_code = 404
            return response
    
            
