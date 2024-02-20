from rest_framework import serializers
from .models import Comparecimento

class ComparecimentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comparecimento
        fields = '__all__'

    def validate_email(self, value):
        """
        Valida se o email já existe no banco de dados.
        """
        if Comparecimento.objects.filter(email=value).exists():
            raise serializers.ValidationError("Já existe um Comparecimento com este email.")
        return value