import PySimpleGUI as sg
import BlueLightPage

def main():
    sg.theme('DarkAmber')
    layout=[
        [sg.Text('눈깜박임 감지 시작', size=(29,1),  font=('Helvetica', 14), justification='center')],
        [sg.Button('눈깜박임 감지 시작', size=(25, 2), font=('Helvetica', 12))],
        [sg.Text('알람 설정 메뉴', size=(29, 1), font=('Helvetica', 14), justification='center')],
        [sg.Button('알람 설정', size=(25, 2), font=('Helvetica', 12))],
        [sg.Text('데이터 통계 메뉴', size=(29, 1), font=('Helvetica', 14), justification='center')],
        [sg.Button('데이터 통계 확인', size=(25, 2), font=('Helvetica', 12))],
    ]

    # 윈도우 생성
    window = sg.Window('StartPage', layout)

    # 이벤트 루프
    while True:
        event, values = window.read()

        if event == sg.WIN_CLOSED:
            break
        elif event == '눈깜박임 감지 시작':
            # 눈깜박임 감지 시작 동작 수행
            print('눈깜박임 감지를 시작합니다.')
            window.close()
            BlueLightPage.start()

        elif event == '알람 설정':
            # 알람 설정 메뉴로 이동하는 동작 수행
            print('알람 설정 메뉴로 이동합니다.')
        elif event == '데이터 통계 확인':
            # 데이터 통계 메뉴로 이동하는 동작 수행
            print('데이터 통계 메뉴로 이동합니다.')

    # 윈도우 종료
    window.close()

if __name__ == '__main__':
    main()