from django.db import models



class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Technician(models.Model):
    name = models.CharField(max_length=50)
    employee_id = models.IntegerField(unique=True)


class ServiceAppointment(models.Model):
    car = models.ForeignKey(
        AutomobileVO,
        related_name="service_appointment",
        on_delete=models.PROTECT,
        null=True,
    )
    vin = models.CharField(max_length=200)
    customer = models.CharField(max_length=200)
    date = models.DateField(null=True)
    time = models.TimeField(null=True)
    completed = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        related_name="service_appointment",
        on_delete=models.PROTECT,
        null=True,
    )
    reason = models.TextField()
    is_vip = models.BooleanField(default=False)