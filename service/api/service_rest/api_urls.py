from django.urls import path
from .views import api_show_service_appointment, api_list_service_appointments, api_technician, api_list_service_history

urlpatterns = [
    path("appointments/", api_list_service_appointments, name="api_list_service_appointments"),
    path("appointments/<int:pk>/", api_show_service_appointment, name="api_service_appointment"),
    path("technicians/", api_technician, name="api_technician"),
    path("service_history/<str:vin>/", api_list_service_history, name="api_list_service_history"),
]