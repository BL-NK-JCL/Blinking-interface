import PySimpleGUI as sg
import datetime
import threading

def Alarm():
        now = datetime.datetime.now()

        realTime_Hour=now.hour

        realTime_minute=now.minute
        myHour=int(myHour_Input)
        myMinute=int(myMinute_Input)

        print(realTime_Hour,realTime_minute)
        print(myHour,myMinute)
        
        if(realTime_Hour==myHour and realTime_minute==myMinute):
            print("지금이다")
            quit()

        timer = threading.Timer(3,Alarm)
        timer.start()

myHour_Input = input("알람설정할 시(H): ")
myMinute_Input = input("알람설정할 분(M):")


Alarm()

# def AlarmPage():
#     sg.theme('DarkAmber')   
#     layout = [
#         [sg.Text('알람', font=('Helvetica', 20), justification='left')],
#         [sg.Button('+', size=(1, 1), font=('Helvetica', 18), button_color=('orange', sg.theme_background_color()))],  # 배경색을 투명으로 설정, 텍스트 색을 주황색으로 설정
#         [sg.Multiline('', size=(30, 5), key='-ALARM LIST-', disabled=True, autoscroll=True, no_scrollbar=True)]],  # 알람 목록을 표시할 Multiline 요소 

#     return layout
