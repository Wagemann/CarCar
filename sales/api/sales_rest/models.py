from django.db import models

class AutomobileVO(models.Model):
    import_href =models.CharField(max_length=255, unique=True)
    model = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    year = models.PositiveIntegerField()
    vin = models.PositiveIntegerField(unique=True)

class Employee(models.Model):
    employee_name = models.CharField(max_length=255)
    employee_id = models.PositiveIntegerField(unique=True)

class Customer(models.Model):
    customer_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.BigIntegerField(unique=True)

class Record(models.Model):
    price = models.FloatField()
    employee = models.ForeignKey(
        Employee,
        related_name="employee",
        on_delete=models.CASCADE,
        null=True)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
        null=True)
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
        null=True)