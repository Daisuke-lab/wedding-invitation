from invitation.models import Invitation
from rest_framework import serializers


class InvitationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invitation
        fields = ["name", "attending", "hotel_needed", "message"]


    def create(self, validated_data):
        print(validated_data)
        return Invitation.objects.create(**validated_data)

