from django.db import models
from author.models import Author


# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=255)
    generic = models.CharField(max_length=255)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)

    class Meta:
        db_table = 'books'

    def __str__(self):
        return self.title
