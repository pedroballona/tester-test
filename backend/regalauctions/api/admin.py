from django.contrib import admin
from .models import UserProfile, Auction, Bid

admin.site.register(UserProfile)
admin.site.register(Auction)
admin.site.register(Bid)
