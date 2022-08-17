from operator import mod
from pyexpat import model
from django.db import models

class Books(models.Model):
    book_name=models.CharField(max_length=200,blank=True,null=True)
    author_name=models.CharField(max_length=200,blank=True,null=True)
    current_page=models.IntegerField(blank=True,null=True)
    total_page=models.IntegerField(blank=True,null=True)