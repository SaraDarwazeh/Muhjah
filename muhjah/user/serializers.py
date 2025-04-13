from rest_framework import serializers

from muhjah.Enum.role import Role
from muhjah.models import User
class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'first_name', 'last_name', 'role']

    def validate_role(self, value):
        if value not in Role.values:
            raise serializers.ValidationError('Incorrect Role.')

    def create(self, validated_value):
        validated_value["role"] = Role.USER.value
        return User.objects.create_user(**validated_value)

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'role', 'is_active')
