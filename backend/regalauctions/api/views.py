from django.contrib.auth.models import User
from .models import UserProfile, Auction, Bid
from rest_framework import viewsets, mixins
from .serializers import UserProfileSerializer, AuctionSerializer, BidSerializer


class UserProfileViewSet(mixins.CreateModelMixin,
                                mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class AuctionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Auction.objects.all()
    serializer_class = AuctionSerializer

class BidViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Bid.objects.all()
    serializer_class = BidSerializer
