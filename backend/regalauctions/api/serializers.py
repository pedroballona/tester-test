from django.contrib.auth.models import User
from rest_framework import serializers, fields
from .models import UserProfile, Auction, Bid
import datetime

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

class AuctionSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="name", read_only=True)
    class Meta:
        model = Auction
        fields = '__all__'
        extra_kwargs = {
            'password': {'read_only': True},
            'opening_date': {'read_only': True},
            'user': {'read_only': True}
           }
    
    def create(self, validated_data):
        user = self.context.get("request").user
        profile = UserProfile.objects.filter(user_id=user.id)[0]
        auction = Auction(
            name = validated_data['name'],
            initial_value = validated_data['initial_value'],
            is_used = validated_data['is_used'],
            user = profile,
            opening_date = datetime.datetime.now().strftime('%Y-%m-%d')

        )
        auction.save()
        return auction

class BidSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="name", read_only=True)
    class Meta:
        model = Bid
        fields = '__all__'
        extra_kwargs = {
            'user': {'read_only': True}
           }

    def create(self, validated_data):
        user = self.context.get("request").user
        profile = UserProfile.objects.filter(user_id=user.id)[0]
        auction = validated_data['auction']
        bid = Bid(
            user = profile,
            auction = auction,
            value = validated_data['value']
        )
        bid.save()
        return bid