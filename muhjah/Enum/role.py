from django.db import models

class Role(models.TextChoices):
    ADMIN  = 'ADMIN'
    USER   = 'USER'
    DOCTOR = 'DOCTOR'


