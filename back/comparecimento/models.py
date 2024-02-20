from django.db import models

# Create your models here.
class DadosPepsico(models.Model):
    nomeCompleto = models.CharField(max_length=100)
    gpid = models.CharField(max_length=20)
    email = models.EmailField()
    departamento = models.CharField(max_length=100)
    regiao = models.CharField(max_length=100)
    nivel = models.CharField(max_length=100)

class DadosPessoais(models.Model):
    rg = models.CharField(max_length=20)
    cpf = models.CharField(max_length=14)
    dataNascimento = models.DateField()
    genero = models.CharField(max_length=10)
    tamanhoCamiseta = models.CharField(max_length=5)
    restricaoAlimentar = models.CharField(max_length=100)
    necessidade = models.CharField(max_length=100)

class DadosContato(models.Model):
    cep = models.CharField(max_length=9)
    endereco = models.CharField(max_length=255)
    numero = models.CharField(max_length=10)
    complemento = models.CharField(max_length=100, blank=True, null=True)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=2)
    telefoneContato = models.CharField(max_length=20)
    contatoEmergencia = models.CharField(max_length=100)
    telefoneEmergencia = models.CharField(max_length=20)

class Transporte(models.Model):
    necessitaTransporteAereo = models.BooleanField(default=False)
    planoChegada = models.CharField(max_length=255)

class DuvidaSugestao(models.Model):
    duvidaSugestao = models.TextField()

class Comparecimento(models.Model):
    dadosPepsico = models.OneToOneField(DadosPepsico, on_delete=models.CASCADE)
    dadosPessoais = models.OneToOneField(DadosPessoais, on_delete=models.CASCADE)
    dadosContato = models.OneToOneField(DadosContato, on_delete=models.CASCADE)
    transporte = models.OneToOneField(Transporte, on_delete=models.CASCADE)
    duvidaSugestao = models.OneToOneField(DuvidaSugestao, on_delete=models.CASCADE)