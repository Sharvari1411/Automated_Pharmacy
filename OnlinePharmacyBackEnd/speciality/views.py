from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage

from . import dbconfig as db
import pymysql

def showIndex(request):
    return HttpResponse('home page welcomes you')

def getSpeciality(request):
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT specialityid,speciality FROM specialities")
    
    data=dict()
    i=1
    for specialityid,speciality in cur.fetchall():
        data[i]={'specialityid':specialityid,'speciality':speciality}
        i+=1

    print(data)
    return JsonResponse({'data':data})
