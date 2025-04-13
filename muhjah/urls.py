from django.urls import include, path

from muhjah.user.urls import urlpatterns

urlpatterns = [
    path('api/auth/', include('muhjah.user.urls'))
]