# Create your views here.
from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import NaoComparecimento
from .serializers import NaoComparecimentoSerializer

class NaoComparecimentoView(ListCreateAPIView):
    queryset = NaoComparecimento.objects.all()
    serializer_class = NaoComparecimentoSerializer
    
