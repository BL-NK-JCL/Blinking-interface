import React, { useState, useEffect, useRef } from 'react';
import './alarm.css';
import Menubar from '../menubar/menubar.jsx';

function AlarmSetting() {
    const [currentTime, setCurrentTime] = useState('');
    const [isAlarmSet, setIsAlarmSet] = useState(false);
    const [alarmTime, setAlarmTime] = useState('');

    const contentRef = React.createRef();

    useEffect(() => {
        const updateClock = () => {
            const date = new Date();
            let h = date.getHours(),
                m = date.getMinutes(),
                s = date.getSeconds(),
                ampm = 'AM';

            if (h >= 12) {
                h = h - 12;
                ampm = 'PM';
            }

            h = h === 0 ? 12 : h;
            h = h < 10 ? '0' + h : h;
            m = m < 10 ? '0' + m : m;
            s = s < 10 ? '0' + s : s;

            setCurrentTime(`${h}:${m}:${s} ${ampm}`);
        };

        const intervalId = setInterval(updateClock, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [alarmTime]);

    const selectMenu = useRef(null);

    const setAlarm = () => {
        if (isAlarmSet) {
            setAlarmTime('');
            contentRef.current.classList.remove('disable');
            setIsAlarmSet(false);
        } else {
            // selectMenu.current를 통해 참조에 접근
            const time = `${selectMenu.current[0].value}:${selectMenu.current[1].value} ${selectMenu.current[2].value}`;

            if (
                time.includes('Hour') ||
                time.includes('Minute') ||
                time.includes('AM/PM')
            ) {
                alert('Please, select a valid time to set Alarm!');
                return;
            }

            setAlarmTime(time);
            setIsAlarmSet(true);
            contentRef.current.classList.add('disable');
        }
    };

    return (
        <div>
            <Menubar />
            <div className="right-section">
                <div className="level-zero">
                    <div className="right-box">
                        <button className="back-btn">
                            <img
                                className="back-btn-img"
                                src="/images/backButton.png"
                            />
                        </button>
                        <div className="main-text">
                            <div className="eng-main-text">Alarm</div>
                            <div className="kor-main-text">알람</div>
                        </div>
                    </div>
                    <div className="bg-rectagle">
                        <div className="top-text">사용자 설정 알림</div>
                        <div className="bottom-text">
                            팝업창으로 급한 일정 확인하기.
                        </div>
                    </div>
                </div>
                <div className="date-notification-text">
                    11월 21일: 오늘의 알림
                </div>
                <div className="alarm" ref={contentRef}>
                    <div className="wrapper">
                        <img src="../images/clock.svg" alt="clock" />
                        <h1>00:00:00 PM</h1>

                        <div className="content">
                            <div className="column">
                                <select ref={selectMenu[0]}>
                                    <option
                                        value="Hour"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        Hour
                                    </option>
                                </select>
                            </div>
                            <div className="column">
                                <select ref={selectMenu[1]}>
                                    <option
                                        value="Minute"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        Minute
                                    </option>
                                </select>
                            </div>
                            <div className="column">
                                <select ref={selectMenu[2]}>
                                    <option
                                        value="AM/PM"
                                        selected
                                        disabled
                                        hidden
                                    >
                                        AM/PM
                                    </option>
                                </select>
                            </div>
                        </div>

                        <button onClick={setAlarm}>Set Alarm</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlarmSetting;
