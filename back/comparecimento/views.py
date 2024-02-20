# Create your views here.
from django.shortcuts import render
from .models import Comparecimento
from rest_framework.generics import ListCreateAPIView
from .serializers import ComparecimentoSerializer

class ComparecimentoView(ListCreateAPIView):
    queryset = Comparecimento.objects.all()
    serializer_class = ComparecimentoSerializer