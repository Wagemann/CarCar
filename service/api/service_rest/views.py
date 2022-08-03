from urllib import request
from django.http import JsonResponse
from .models import AutomobileVO, ServiceAppointment, Technician
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
import json



class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_id",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "customer",
        "appt_date_time",
        "technician",
        "reason",
        "is_vip",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "car": AutomobileVODetailEncoder(),
    }

    def get_extra_data(self, o):
        return {"vin": o.car.vin}


@require_http_methods(["GET", "POST"])
def api_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method == "GET":
        appointments = ServiceAppointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else:
        content = json.loads(request.body)
        
        try:
            vin_number = content["vin"]
            automobile = AutomobileVO.objects.get(vin=vin_number)
            content["car"] = automobile
            employee_id = content["technician"]
            technician_name = Technician.objects.get(employee_id=employee_id)
            content["technician"] = technician_name
            appointment = ServiceAppointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Could not create appointment"},
                status=400,
            )


@require_http_methods(["GET"])
def api_list_service_history(request, vin):
    if request.method == "GET":
        history = ServiceAppointment.objects.filter(vin=vin)
    return JsonResponse(
        history,
        encoder=AppointmentEncoder,
        safe=False,
    )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_service_appointment(request, pk):
    if request.method == "GET":
            appointment = ServiceAppointment.objects.get(pk=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
    elif request.method == "DELETE":
        try:
            appointment = ServiceAppointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except ServiceAppointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment does not exist"}
            )
    else:
        content = json.loads(request.body)
        print("!!!!!!!", content)
        
        appointment = ServiceAppointment.objects.get(id=pk)
        print("*******", appointment)
        setattr(appointment, "isCompleted", content["isCompleted"])
        appointment.save()
        return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False
    )

