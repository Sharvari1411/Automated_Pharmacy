from django.urls import path,include
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.showIndex, name="qualification-home"),
    path('qualification/',views.getQualification,name="qualification-check"),
    path('savedoctor/',views.saveDoctor,name="save-doctor"),
    path('userdata/',views.getAllUsers,name="get-allusers"),
    path('doctordata/',views.getDoctorData,name="get-doctors")
]
