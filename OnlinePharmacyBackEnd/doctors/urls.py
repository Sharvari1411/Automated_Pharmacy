from django.urls import path,include
from . import views

urlpatterns=[

   path('doctors/',views.showDoctors,name="doctors")
   #path('dieticians/',views.showDieticians,name="dieticians"),
   #path('dentists/',views.showDentists,name="dentists"),
   #path('gastroenterologists/',views.showGastro,name="gastroenterologists"),
   #path('physicians/',views.showPhysicians,name="physicians"),
   #path('surgeons/',views.showSurgeons,name="surgeons"),
   #path('gynac/',views.showGynac,name="gynac"),
   #path('lapros/',views.showLapros,name="lapros"),
   #path('ortho/',views.showOrthopedists,name="ortho"),
   #path('pediatrician/',views.showPediatrician,name="pediatrician"),
   #path('physiotherapists/',views.showPhysiotherapists,name="physiotherapists")


   
]