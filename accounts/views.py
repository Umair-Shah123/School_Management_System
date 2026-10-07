from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from .permissions import IsAdmin
from .serializers import LoginSerializer
print("LOGIN SERIALIZER IMPORTED:", LoginSerializer)
# Create your views here.
class LoginView(TokenObtainPairView):
    serializer_class=LoginSerializer

class AdminTestView(APIView):
    permission_classes=[IsAdmin]
    def get(self,request):
        return Response(
            {
                "message":"Welcome Admin",
                "username":request.user.username,
                "role":request.user.role
            }

    )    