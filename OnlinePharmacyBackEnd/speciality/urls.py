from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.showIndex, name="speciality-home"),
    path('speciality/',views.getSpeciality,name="speciality-check"),
]
