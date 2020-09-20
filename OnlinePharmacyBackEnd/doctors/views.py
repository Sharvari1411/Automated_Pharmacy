from django.shortcuts import render
import pymysql
from django.http import HttpResponse,JsonResponse


def showDoctors(request):
        conn=pymysql.connect(host='localhost',user='root',passwd='Sh@ru1998',db='automated_pharmacy')
        cur=conn.cursor()
        cur.execute("SELECT fname,lname,mname,contactno,placename,speciality,qualification,experience,username FROM viewdoctors")
        data=dict()
        i=1
        for fname,lname,mname,contactno,placename,speciality,qualification,experience,username in cur.fetchall():
            data[i]={'fullname':fname+" "+mname+" "+lname,'contactno':contactno,'placename':placename,'speciality':speciality,'qualification':qualification,'experience':experience}
            i+=1
        return JsonResponse({'rec':data})









