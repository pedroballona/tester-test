from django.contrib.auth.models import User
from .models import UserProfile, Auction, Bid
from rest_framework import viewsets, mixins
from .serializers import UserProfileSerializer, AuctionSerializer, BidSerializer
from .permissions import OnlyPostToAnonymous

class UserProfileViewSet(mixins.CreateModelMixin,
                                mixins.ListModelMixin,
                                mixins.RetrieveModelMixin,
                                viewsets.GenericViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = UserProfileSerializer
    permission_classes = (OnlyPostToAnonymous,)

    def get_queryset(self):
        queryset = UserProfile.objects.all().filter(user_id=self.request.user.id)
        return queryset


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
    serializer_class = BidSerializer

    def get_queryset(self):
        queryset = Bid.objects.all()
        auction = self.request.query_params.get('auction', None)
        if auction is not None:
            queryset = queryset.filter(auction_id=auction)
        return queryset
