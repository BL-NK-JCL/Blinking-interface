import threading
import cv2
from gaze_tracking import GazeTracking
import datetime
import subprocess

stop_event = threading.Event()

def gaze_track():
    global stop_event

    gaze = GazeTracking()
    webcam = cv2.VideoCapture(0)

    count = 0
    is_blinking = False

    last_updated = datetime.datetime.now()

    while not stop_event.is_set():
        # We get a new frame from the webcam
        _, frame = webcam.read()


        # We send this frame to GazeTracking to analyze it
        gaze.refresh(frame)

        new_frame = gaze.annotated_frame()
        text = ""

        if gaze.is_blinking():
            if subprocess.check_output(['nightlight', 'status']).decode('utf-8') == 'on\n':
                subprocess.run(['nightlight', 'off'])

            if(is_blinking == False):
                count += 1
                is_blinking = True
                print('blinked' + str(count))

            last_updated = datetime.datetime.now()


        else:
            if last_updated + datetime.timedelta(seconds=2) < datetime.datetime.now():
                subprocess.run(['nightlight', 'on'])
                print('plz blink')
            is_blinking = False

        # cv2.putText(frame, text, (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)

        # left_pupil = gaze.pupil_left_coords()
        # right_pupil = gaze.pupil_right_coords()
        # cv2.putText(frame, "Left pupil:  " + str(count), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)
        # cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

        # cv2.imshow("Demo", frame)

        # if cv2.waitKey(1) == 27:
        #    break