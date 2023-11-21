import React from 'react'
import "./eyecare.css"
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';
import Menubar from '../menubar/menubar.jsx'


function eyecare() {

  return (
	<div>
		
        <Menubar/>

        <div class="right-section">
            <div class="level-zero">
                <div class="right-box">
                    <button class="back-btn">
                        <img class="back-btn-img" src='/images/backButton.png' />
                    </button> 
                    
                    <div class="main-text">
                        <div class="eng-main-text">BL!nk Data</div>
                        <div class="kor-main-text">사용자 눈 건강 데이터</div>
                    </div>
                </div>
                <div class="bg-rectagle">
                    <div class="top-text">사용자 눈 깜빡임 데이터</div>
                    <div class="bottom-text">
                        오늘 얼마나 눈을 자주 깜빡였나요?
                    </div>
                </div>
            </div>
            
          
        </div>
	</div>
  )
}

export default eyecare