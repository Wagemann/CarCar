# Generated by Django 4.0.3 on 2022-08-03 15:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0002_alter_record_price'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='automobilevo',
            name='color',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='import_href',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='model',
        ),
        migrations.RemoveField(
            model_name='automobilevo',
            name='year',
        ),
    ]
