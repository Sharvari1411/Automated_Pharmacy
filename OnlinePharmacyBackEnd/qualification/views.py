from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage

from . import dbconfig as db
import pymysql
import json

def showIndex(request):
    return HttpResponse('home page welcomes you')

def getQualification(request):
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT qualificationid,qualification FROM qualifications")
    

    data=dict()
    i=1
    for qualificationid,qualification in cur.fetchall():
        data[i]={'qualificationid':qualificationid,'qualification':qualification}
        i+=1

    print(data)
    return JsonResponse({'data':data})


@csrf_exempt
def saveDoctor(request):
    json_data = json.loads(str(request.body, encoding='utf-8'))
    #print(json_data['lname']) 

    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()  

    if json_data['usertype'] == "Doctor": 
        record=[json_data['fname'],json_data['mname'],json_data['lname'],json_data['gender'],json_data['fkplaceid'],json_data['fkqualificationid'],json_data['fkspecialityid'],json_data['username'],json_data['password'],json_data['emailid'],json_data['contactno']]
        cur.callproc("spInsertDoctor",record)    
        x.conn.commit()   
    else:
        records=[json_data['fname'],json_data['mname'],json_data['lname'],json_data['gender'],json_data['username'],json_data['password'],json_data['emailid'],json_data['contactno'],json_data['fkplaceid']]
        cur.callproc("spInsertUser",records)    

        x.conn.commit()     

    return JsonResponse({'status':'success'})


def getAllUsers(request):
    print("\n getAllUsers working")
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT UserId, Fname, Mname, Lname, Gender, Username, Password, Emailid, Contactno, FkPlaceId FROM Users")
    
    data=dict()
    i=1
    for UserId,Fname,Mname,Lname,Gender,Username,Password,Emailid,Contactno,FkPlaceId in cur.fetchall():
        data[i]={'UserId':UserId,'Fname':Fname,'Mname':Mname,'Lname':Lname,'Gender':Gender,'Username':Username,'Password':Password,'Emailid':Emailid,'Contactno':Contactno,'FkPlaceId':FkPlaceId}
        i+=1

    print(data)
    return JsonResponse({'data':data})


def getDoctorData(request):
    print("\n getDoctorData working")
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT fname, mname, lname, gender, placename, qualification, speciality, username, password,contactno from viewdoctors")
    
    data=dict()
    i=1
    for fname,mname,lname,gender,placename,qualification,speciality,username,password,contactno in cur.fetchall():
        data[i]={'fname':fname,'mname':mname,'lname':lname,'gender':gender,'placename':placename,'qualification':qualification,'speciality':speciality,'username':username,'password':password,'contactno':contactno}
        i+=1

    print(data)
    return JsonResponse({'data':data})