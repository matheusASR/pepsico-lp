from django.db import models

# Create your models here.
class NaoComparecimento(models.Model):
    nomeCompleto = models.CharField(max_length=100)
    gpid = models.CharField(max_length=20)
    email = models.EmailField()
    departamento = models.CharField(max_length=100)
    regiao = models.CharField(max_length=100)
    nivel = models.CharField(max_length=100)
    motivoDeclinio = models.TextField(null=True)