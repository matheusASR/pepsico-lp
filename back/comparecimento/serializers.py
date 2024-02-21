from rest_framework import serializers
from .models import Comparecimento
from naocomparecimento.models import NaoComparecimento

class ComparecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comparecimento
        fields = '__all__'

    def validate_email(self, value):
        if Comparecimento.objects.filter(email=value).exists() or NaoComparecimento.objects.filter(email=value).exists():
            raise serializers.ValidationError("Já existe uma inscrição com este email.")
        return value