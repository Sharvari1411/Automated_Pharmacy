from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
import pymysql

from PIL import Image
import PIL.Image

from pytesseract import image_to_string
import pytesseract

import traceback

def showIndex(request):
    return HttpResponse('home page welcomes you')
    
@csrf_exempt
def checkPrescription(request):
    img_file=request.FILES['image']
    print(img_file.name)
    print(img_file.size)
    fs=FileSystemStorage()
    fs.save(img_file.name,img_file)
    output='N/A'

    pytesseract.pytesseract.tesseract_cmd = r'C:/Program Files/Tesseract-OCR/tesseract'
    TESSDATA_PREFIX = r'C:/Program Files/Tesseract-OCR'
    
    fullpath=fs.base_location + "\\" + img_file.name
    print(fullpath,"\n\n")

    output = pytesseract.image_to_string(PIL.Image.open(img_file).convert("RGB"), lang='eng')
    print (output)

    return JsonResponse({'data':output})
