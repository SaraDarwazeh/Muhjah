from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.db import models

from muhjah.Enum.role import Role
from muhjah.user.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=256, unique=True)
    password = models.TextField()
    first_name =  models.CharField(max_length=256)
    last_name = models.CharField(max_length=256)
    email = models.EmailField(max_length=512, unique=True)
    role = models.CharField(max_length=16, choices=Role.choices, default=Role.USER)
    is_active = models.BooleanField(default=False)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'first_name', 'last_name', 'role']
    objects = UserManager()

    class Meta:
        db_table = 'user'
        verbose_name = 'user'
        verbose_name_plural = 'users'
        managed = False

    def __str__(self):
        return self.username

    @property
    def last_login(self):
        return None

    @last_login.setter
    def last_login(self, value):
        pass

    @property
    def is_superuser(self):
        return None

    @is_superuser.setter
    def is_superuser(self, value):
        pass