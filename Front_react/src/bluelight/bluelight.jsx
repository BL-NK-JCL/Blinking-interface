import { Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import './bluelight.css';
import Menubar from '../menubar/menubar.jsx';

function Main() {
    const [clicked, setClicked] = useState(true);
    const onClick = () => setClicked(!clicked);

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
                            <div class="eng-main-text">Start Bluelight!</div>
                            <div class="kor-main-text">
                                자동 블루라이트 활성화
                            </div>
                        </div>
                    </div>
                    <div class="bg-rectagle">
                        <div class="top-text">사용자 설정 시간</div>
                        <div class="bottom-text">
                            한계 눈깜박임 시간을 설정해 주세요.
                        </div>
                    </div>
                </div>
                <div class="average-blink-text">
                    정상적인 평균 눈깜박임 시간은 분당 26회 입니다.
                </div>
                <div class="level-one">
                    <button
                        className={`${clicked ? 'sec-btn' : 'sec-btn-clicked'}`}
                        onClick={() => onClick()}
                    >
                        5초
                    </button>
                    <button class="sec-btn">10초</button>
                    <button class="sec-btn">15초</button>
                    <button class="sec-btn">20초</button>
                </div>
                <Link to="/processBluelight" style={{ textDecoration: 'none' }}>
                    <div class="level-two">
                        <button class="start-btn" onClick={handleButtonClick}>
                            시작하기
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Main;
