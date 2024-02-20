from django.urls import path

from . import views

urlpatterns = [
    path("naocomparecimento/", views.NaoComparecimentoView.as_view()),
]