import React from 'react';
import axios from 'axios';
import './menubar.css';
import { Link, useNavigate } from 'react-router-dom';

function Menubar() {
    const handleButtonClick = () => {
        // GET 요청 보내기
        axios
            .get(
                'http://127.0.0.1:5050/get-plot?year=2023&month=11&day=20&hour=0 '
            )
            .then((response) => {
                // 성공적으로 응답을 받았을 때 실행할 코드
                console.log('데이터:', response.data);
            })
            .catch((error) => {
                // 오류가 발생했을 때 실행할 코드
                console.error('오류:', error);
            });
    };

    const navigate = useNavigate();

    const onClickBlueLight = (e) => {
        navigate('/');
    };
    const onClickAlarm = (e) => {
        navigate('/alarm');
    };
    const onClickEyecare = (e) => {
        navigate('/eyecare');
        handleButtonClick();
    };

    return (
        <div class="left-section">
            <div class="service-name">BL!NK</div>
            <div class="Auto-Bluelight">
                <img
                    class="button_img"
                    src="../images/auto-bluelight-menu-btn.png"
                />
                <button
                    class="Auto-Bluelight-Button"
                    onClick={onClickBlueLight}
                >
                    Auto BlueLight
                </button>
            </div>
            <div class="Alarms">
                <img class="button_img" src="../images/alarm-btn.png" />
                <button class="Auto-Bluelight-Button" onClick={onClickAlarm}>
                    Alarms
                </button>
            </div>
            <div class="data">
                <img class="button_img" src="../images/data-btn.png" />
                <button class="Auto-Bluelight-Button" onClick={onClickEyecare}>
                    Eye Data Care
                </button>
            </div>
        </div>
    );
}

export default Menubar;
