import PySimpleGUI as sg
from view import AlarmPage
import processBlueLightPage

def start():
    sg.theme('DarkAmber')
    layout = [
        [sg.Text('자동 블루라이트 시작', size=(29,1),  font=('Helvetica', 14), justification='center')],
        [sg.Button('자동 블루라이트 시작', size=(25, 2), font=('Helvetica', 12))],
        [sg.Button('Back')]
    ]

    window = sg.Window("블루라이트 시작하기", layout)

    while True:
        event, values = window.read()

        if event == sg.WIN_CLOSED:
            break
        elif event == "자동 블루라이트 시작":
            processBlueLightPage.processBlueLight()
            window.close()

        elif event == "Back":
            window.close()
            AlarmPage.main()

    window.close()

