from invitation.models import Invitation
from invitation.serializers import InvitationSerializer
from rest_framework.permissions import AllowAny
from rest_framework import generics

class ListCreateInvitation(generics.ListCreateAPIView):
    queryset = Invitation.objects.all()
    permission_classes = [AllowAny]
    serializer_class = InvitationSerializer

    # def perform_create(self, serializer):
    #     print("you are here")
    #     serializer.save(user=self.request.user)

    # def create(self, request, *args, **kwargs):
    #     print(*args)
    #     super().create(request, *args, **kwargs)

