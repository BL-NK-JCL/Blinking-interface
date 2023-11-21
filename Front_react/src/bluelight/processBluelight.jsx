import React from 'react';
import './bluelight.css';
import Menubar from '../menubar/menubar.jsx';
import { Switch, Route, Link } from 'react-router-dom';

function processBluelight() {
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
                            <button
                                class="end-btn"
                                onclick="goBackBlueLightMain()"
                            >
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
