# Generated by Django 4.1.1 on 2022-09-09 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Locations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street', models.CharField(max_length=32)),
                ('city', models.CharField(max_length=32)),
                ('state', models.CharField(max_length=32)),
            ],
        ),
    ]