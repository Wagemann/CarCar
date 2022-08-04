from django.contrib import admin
from .models import Technician, ServiceAppointment, AutomobileVO



class TechnicianAdmin(admin.ModelAdmin):
    pass

admin.site.register(Technician, TechnicianAdmin)



class ServiceAppointmentAdmin(admin.ModelAdmin):
    pass

admin.site.register(ServiceAppointment, ServiceAppointmentAdmin)



class AutomobileVOAdmin(admin.ModelAdmin):
    pass

admin.site.register(AutomobileVO, AutomobileVOAdmin)