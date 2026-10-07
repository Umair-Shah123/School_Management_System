from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class LoginSerializer(TokenObtainPairSerializer):

 @classmethod
 def get_token(cls,user):
  token=super().get_token(user)
  token['username']=user.username
  token['role']=user.role    
  return token
     
def validate(self, attrs):
        print(">>> VALIDATE METHOD STARTED <<<")
        data = super().validate(attrs)
        print("LOGIN SERIALIZER IS RUNNING")
        print("USER:", self.user.username)
        print("ROLE:", self.user.role)

        data["username"] = self.user.username
        data["role"] = self.user.role

        return data