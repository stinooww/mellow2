from django.db import models
from tinymce.models import HTMLField


class PortfolioItems(models.Model):
    # song title
    clientName = models.CharField(max_length=255, null=False, default='default')
    #titel
    title = models.CharField(max_length=255, null=False, default='default')
    #request
    request = HTMLField(default='default')
    #solution
    solution = HTMLField(default='default')
    #websiteurl
    siteUrl = models.CharField(max_length=400, null=True)
    # image url
    mainImageUrl = models.CharField(max_length=400, null=False, default='default url')
    #thumbnail
    thumbnail = models.CharField(max_length=400, null=False, default='default url')
    # image carousel
    imageUrl = models.CharField(max_length=400, null=True)

    def __str__(self):
        return "{} - {}".format(self.clientName, self.title, self.request, self.solution, self.siteUrl, self.mainImageUrl, self.imageUrl)


class Employee(models.Model):
    # name
    name = models.CharField(max_length=255, null=False)
    #function
    function = models.CharField(max_length=255, null=False, default='default')
    # description
    description = HTMLField()
    # imageUrl
    imageUrl = models.CharField(max_length=400, null=False)

    def __str__(self):
        return "{} - {}".format(self.name, self.function, self.description, self.imageUrl)

