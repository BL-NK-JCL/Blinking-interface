import React from 'react';
import './alarm.css';
import Menubar from '../menubar/menubar.jsx';
import { Link } from 'react-router-dom';

function alarm() {
    return (
        <div>
            <Menubar />
            <div class="right-section">
                <div class="level-zero">
                    <div class="right-box">
                        <button class="back-btn">
                            <img
                                class="back-btn-img"
                                src="/images/backButton.png"
                            />
                        </button>
                        <div class="main-text">
                            <div class="eng-main-text">Alarm</div>
                            <div class="kor-main-text">알람</div>
                        </div>
                    </div>
                    <div class="bg-rectagle">
                        <div class="top-text">사용자 설정 알림</div>
                        <div class="bottom-text">
                            팝업창으로 급한 일정 확인하기
                        </div>
                    </div>
                </div>
                <div class="date-nofication-text">11월 21일: 오늘의 알림</div>
                <Link to="/AlarmSetting" style={{ textDecoration: 'none' }}>
                    <div class="bg-rectagle-add-alarm">
                        <button class="add-alarm-btn">추가하기</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default alarm;
