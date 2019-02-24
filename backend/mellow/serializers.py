from rest_framework import serializers
from .models import PortfolioItems, Employee


class PortfolioItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioItems
        fields = ("clientName", "title", "request", "solution", "siteUrl", "mainImageUrl", "imageUrl")


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ("name", "function", "description", "imageUrl")
