from urllib import request
from django.http import JsonResponse
from django.shortcuts import render
from .models import AutomobileVO, ServiceAppointment, Technician
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json



class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_id",
        "id",
    ]



class ServiceAppointmentListEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "car",
        "customer",
        "appt_date_time",
        "technician",
        "reason",
        "is_vip"
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
    }


class ServiceAppointmentDetailEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "vin",
        "customer",
        "appt_date_time",
        "technician",
        "reason",
    ]
    encoders = {
        "technician": TechnicianDetailEncoder(),
        # "vin": AutomobileVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=ServiceAppointmentListEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        
        try:
            vin_number = content["vin"]
            automobile = AutomobileVO.objects.filter(vin=vin_number)
            content["vin"] = automobile[0].vin
            technician = content["technician"]
            technician_name = Technician.objects.get(name=technician)
            content["technician"] = technician_name
            appointment = ServiceAppointment.objects.create(**content)
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Could not create appointment"},
                status=400,
            )
        appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            appointments,
            encoder=ServiceAppointmentDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def api_list_service_history(request, vin):
    if request.method == "GET":
        history = ServiceAppointment.objects.filter(vin=vin)
    return JsonResponse(
        history,
        encoder=ServiceAppointmentDetailEncoder,
        safe=False,
    )


@require_http_methods(["GET", "DELETE"])
def api_show_service_appointment(request, pk):
    if request.method == "GET":
        try:
            appointment = ServiceAppointment.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=ServiceAppointmentDetailEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            response = JsonResponse({"message": "No appointment exists"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            appointment = ServiceAppointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=ServiceAppointmentDetailEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"}
            )
  


def api_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )