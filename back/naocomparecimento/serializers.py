from rest_framework import serializers
from .models import NaoComparecimento
from comparecimento.models import Comparecimento

class NaoComparecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = NaoComparecimento
        fields = '__all__'

    def validate_email(self, value):
        """
        Valida se o email já existe no banco de dados.
        """
        if Comparecimento.objects.filter(email=value).exists() or NaoComparecimento.objects.filter(email=value).exists():
            raise serializers.ValidationError("Já existe uma inscrição com este email.")
        return value