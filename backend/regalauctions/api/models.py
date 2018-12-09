from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

class UserProfile(models.Model):
    user = models.OneToOneField(User, unique=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    cpf = models.CharField(max_length=11)
    active = models.BooleanField()
    is_admin = models.BooleanField()

    def __str__(self):
        return self.user.username

class Auction(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    initial_value = models.FloatField()
    is_used = models.BooleanField()
    opening_date = models.DateField()
    ending_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name

class Bid(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    value = models.FloatField()
    auction = models.ForeignKey(Auction, on_delete=models.CASCADE)

    def clean(self):
        result = Bid.objects.all().aggregate(models.Min('value'))
        min_value = result['value__min']
        if(min_value is not None and self.value < min_value):
            raise ValidationError(f"Não é possível criar um lance menor que o menor lance de R${min_value:.2f}")

    class Meta:
        unique_together = ('user', 'value', 'auction')

    def __str__(self):
        return self.value