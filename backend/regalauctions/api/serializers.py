from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile, Auction, Bid

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)

    class Meta:
        model = UserProfile
        fields = '__all__'
    
    def create(self, validated_data):
        user_raw = validated_data.pop('user')
        user = User(username=user_raw['username'], email=user_raw['email'])
        user.set_password(user_raw['password'])
        user.save()
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile

class AuctionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Auction
        fields = '__all__'

class BidSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'
