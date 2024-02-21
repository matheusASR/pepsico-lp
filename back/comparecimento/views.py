from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST
from .models import Comparecimento
from .serializers import ComparecimentoSerializer
from rest_framework.generics import ListCreateAPIView

class ComparecimentoView(ListCreateAPIView):
    queryset = Comparecimento.objects.all()
    serializer_class = ComparecimentoSerializer

    # def post(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     if serializer.is_valid():
    #         self.perform_create(serializer)
    #         email = serializer.validated_data.get('email')  # Supondo que o campo do email seja 'email'
    #         send_mail(
    #             'Assunto do Email',
    #             'Corpo do Email',
    #             'matheusau2004@gmail.com',
    #             [email], 
    #             fail_silently=False,
    #         )
    #         return Response(serializer.data, status=HTTP_201_CREATED)
    #     return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
