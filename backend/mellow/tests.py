from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import PortfolioItems
from .serializers import PortfolioItemSerializer

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_song(clientName="", description="",imageUrl=""):
        if clientName != "" and description != "" and imageUrl !="":
            PortfolioItems.objects.create(clientName=clientName, description=description, imageUrl=imageUrl)

    def setUp(self):
        # add test data
        self.create_song("company A", "Description of project A", "testurl")
        self.create_song("company B", "Description of project B", "testurl")
        self.create_song("company C", "Description of project C", "testurl")
        self.create_song("company D", "Description of project D", "testurl")


class GetAllPortfolioItemsTest(BaseViewTest):

    def test_get_all_portfolio_items(self):
        """
        This test ensures that all songs added in the setUp method
        exist when we make a GET request to the songs/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("portfolioItems-all", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = PortfolioItems.objects.all()
        serialized = PortfolioItemSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
