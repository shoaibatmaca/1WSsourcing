# Generated by Django 5.2 on 2025-04-17 03:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('supplier', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='suppliercertification',
            name='supplier',
            field=models.ForeignKey(default='null', on_delete=django.db.models.deletion.CASCADE, related_name='certifications', to='supplier.supplier'),
        ),
    ]
