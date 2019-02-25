from django.urls import path
from .views import PortfolioView, EmployeeView, PortfolioDetailView


urlpatterns = [
    path('portfolio/', PortfolioView.as_view(), name="portfolioItems-all"),
    path('portfolio/<int:pk>/', PortfolioDetailView.as_view(), name="portfolio-detail"),
    path('employees/', EmployeeView.as_view(), name="Employees-all")
]