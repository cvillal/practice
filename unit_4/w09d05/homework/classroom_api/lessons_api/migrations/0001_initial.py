# Generated by Django 4.1.1 on 2022-09-10 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lessons',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('notes', models.TextField()),
                ('date_of_lesson', models.DateField()),
                ('needs_practice', models.BooleanField(null=True)),
            ],
        ),
    ]
