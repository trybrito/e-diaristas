from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .services.cidades_atendimento_service import listar_diaristas_cidade
from .serializers.diaristas_cidade_serializer import DiaristaCidadeSerializer
from .pagination.diaristas_cidade_pagination import DiaristasCidadePagination

# Create your views here.


class DiaristasCidadeList(APIView, DiaristasCidadePagination):
    def get(self, request, format=None):
        cep = self.request.query_params.get('cep', None)
        diaristas = listar_diaristas_cidade(cep)
        resultado = self.paginate_queryset(diaristas, request)
        serializer = DiaristaCidadeSerializer(resultado, many=True, context={'request': request})
        return self.get_paginated_response(serializer.data)
