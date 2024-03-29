# Generated by Django 4.0.7 on 2024-02-21 03:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='NaoComparecimento',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomeCompleto', models.CharField(max_length=100)),
                ('gpid', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=254)),
                ('departamento', models.CharField(max_length=100)),
                ('regiao', models.CharField(max_length=100)),
                ('nivel', models.CharField(max_length=100)),
                ('motivoDeclinio', models.TextField(null=True)),
            ],
        ),
    ]
