from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.showIndex, name="place-home"),
    path('place/',views.getPlace,name="place-check"),
]
