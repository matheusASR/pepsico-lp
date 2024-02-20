from rest_framework import serializers
from .models import NaoComparecimento

class NaoComparecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaoComparecimento
        fields = '__all__'