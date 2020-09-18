from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage

from . import dbconfig as db
import pymysql

def showIndex(request):
    return HttpResponse('home page welcomes you')

def getPlace(request):
    print("\n getplace working")
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT placeid,placename FROM place")
    

    data=dict()
    i=1
    for placeid,placename in cur.fetchall():
        data[i]={'placeid':placeid,'placename':placename}
        i+=1

    print(data)
    return JsonResponse({'data':data})
