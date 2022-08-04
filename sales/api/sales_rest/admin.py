from django.contrib import admin

# Register your models here.
from .models import AutomobileVO

class AutomobileVoAdmin(admin.ModelAdmin):
    pass

admin.site.register(AutomobileVO, AutomobileVoAdmin)