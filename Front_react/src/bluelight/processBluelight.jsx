import React from 'react';
import './bluelight.css';
import Menubar from '../menubar/menubar.jsx';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';

function processBluelight() {
    const handleButtonClick = () => {
        // GET 요청 보내기
        axios
            .put('http://127.0.0.1:5050/end_tracking')
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

                <div class="processBluelight">
                    <div class="process-text">블루라이트가 실행 중입니다.</div>
                    <div class="process-end-btn">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <button class="end-btn" onclick={handleButtonClick}>
                                종료하기
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default processBluelight;
