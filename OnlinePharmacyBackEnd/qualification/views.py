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
    cur.execute("SELECT qualificationid,qualification FROM viewQualification")
    

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
        record=[json_data['fname'],json_data['mname'],json_data['lname'],json_data['gender'],json_data['fkplaceid'],json_data['fkqualificationid'],json_data['fkspecialityid'],json_data['username'],json_data['password'],json_data['emailid'],json_data['contactno'],'enrolled']
        cur.callproc("spInsertDoctor",record)    
        x.conn.commit()   
    else:
        insertStatement = "INSERT INTO USERS(FNAME,MNAME,LNAME,GENDER,USERNAME,PASSWORD,EMAILID,CONTACTNO,FKPLACEDID) VALUES (%d,%s,%s,%s,%s,%s,%s,%s,%s,%d);"%(json_data['fname'],json_data['mname'],json_data['lname'],json_data['gender'],json_data['username'],json_data['password'],json_data['emailid'],json_data['contactno'],json_data['fkplaceid'])   
        cur.execute(insertStatement) 
        x.conn.commit()     

    return JsonResponse({'status':'success'})


def getAllUsers(request):
    print("\n getAllUsers working")
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT UserId, Fname, Mname, Lname, Gender, Username, Password, Emailid, Contactno, FkPlaceDId FROM Users")
    
    data=dict()
    i=1
    for UserId,Fname,Mname,Lname,Gender,Username,Password,Emailid,Contactno,FkPlaceDId in cur.fetchall():
        data[i]={'UserId':UserId,'Fname':Fname,'Mname':Mname,'Lname':Lname,'Gender':Gender,'Username':Username,'Password':Password,'Emailid':Emailid,'Contactno':Contactno,'FkPlaceDId':FkPlaceDId}
        i+=1

    print(data)
    return JsonResponse({'data':data})


def getDoctorData(request):
    print("\n getDoctorData working")
    x=db.DbConfig()
    x.connectMySQL()
    cur=x.conn.cursor()
    cur.execute("SELECT doctorid, fname, mname, lname, gender, place_name, qualification, speciality, username, password, emailid, contactno, status from viewDoctorData")
    
    data=dict()
    i=1
    for doctorid,fname,mname,lname,gender,place_name,qualification,speciality,username,password,emailid,contactno,status in cur.fetchall():
        data[i]={'doctorid':doctorid,'fname':fname,'mname':mname,'lname':lname,'gender':gender,'place_name':place_name,'qualification':qualification,'speciality':speciality,'username':username,'password':password,'emailid':emailid,'contactno':contactno,'status':status}
        i+=1

    print(data)
    return JsonResponse({'data':data})