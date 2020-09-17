from django.shortcuts import render
import pymysql
from django.http import HttpResponse,JsonResponse


def showDoctors(request):
        conn=pymysql.connect(host='localhost',user='root',passwd='Sh@ru1998',db='automated_pharmacy')
        cur=conn.cursor()
        cur.execute("SELECT fullname,contactno,placename,speciality,qualification,experience FROM viewdoctors")
        data=dict()
        i=1
        for fullname,contactno,placename,speciality,qualification,experience in cur.fetchall():
            data[i]={'fullname':fullname,'contactno':contactno,'placename':placename,'speciality':speciality,'qualification':qualification,'experience':experience}
            i+=1
        return JsonResponse({'rec':data})









