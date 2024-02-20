from django.db import models

# Create your models here.
class DadosPepsico(models.Model):
    nomeCompleto = models.CharField(max_length=100)
    gpid = models.CharField(max_length=20)
    email = models.EmailField()
    departamento = models.CharField(max_length=100)
    regiao = models.CharField(max_length=100)
    nivel = models.CharField(max_length=100)

class MotivoDeclinio(models.Model):
    motivoDeclinio = models.TextField()

class NaoComparecimento(models.Model):
    dadosPepsico = models.OneToOneField(DadosPepsico, on_delete=models.CASCADE)
    motivoDeclinio = models.OneToOneField(MotivoDeclinio, on_delete=models.CASCADE)