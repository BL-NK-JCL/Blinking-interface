import threading

import PySimpleGUI as sg
from model import example
def processBlueLight():
    sg.theme('DarkAmber')
    gaze_tracking_enabled = True

    layout = [
        [sg.Text('블루라이트 작동 중', size=(29,1),  font=('Helvetica', 14), justification='center')],
        [sg.Button('자동 블루라이트 종료하기', size=(25, 2), font=('Helvetica', 12))],
    ]

    window = sg.Window("블루라이트 진행 중", layout)

    gaze_thread = threading.Thread(target=example.gaze_track)
    gaze_thread.start()

    while True:
        event, values = window.read()

        if event == sg.WIN_CLOSED:
            break
        elif event == "자동 블루라이트 종료하기":
            example.stop_event.set()
            break

    gaze_thread.join()
    window.close()

