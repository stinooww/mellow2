from django.shortcuts import render

from django.views.generic.edit import CreateView
from django.urls import reverse_lazy

from rest_framework import generics
from .models import PortfolioItems, Employee
from rest_framework.response import Response
from rest_framework.views import status
from .serializers import PortfolioItemSerializer, EmployeeSerializer


class PortfolioView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = PortfolioItems.objects.all()
    serializer_class = PortfolioItemSerializer


class EmployeeView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer


class PortfolioDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET portfolio/:id/
    """
    queryset = PortfolioItems.objects.all()
    serializer_class = PortfolioItemSerializer

    def get(self, request, *args, **kwargs):
        try:
            a_portfolioItem = self.queryset.get(pk=kwargs["pk"])
            return Response(PortfolioItemSerializer(a_portfolioItem).data)
        except PortfolioItems.DoesNotExist:
            return Response(
                data={
                    "message": "item with id: {} does not exist".format(kwargs["pk"])
                },
                status=status.HTTP_404_NOT_FOUND
            )

