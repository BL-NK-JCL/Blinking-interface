import React from 'react'
import "./menubar.css"
import { Link, useNavigate } from 'react-router-dom';

function Menubar() {

  const navigate = useNavigate();

  	const onClickBlueLight = (e) => {
		navigate('/');
	}
	const onClickAlarm = (e) => {
		navigate('/alarm');
	}
	const onClickEyecare = (e) => {
		navigate('/eyecare');
	}



  return (
	<div class="left-section">
            <div class="service-name">BL!NK</div>
            <div class="Auto-Bluelight">
                <img class="button_img" src="../images/auto-bluelight-menu-btn.png"/>
                <button class="Auto-Bluelight-Button" onClick={onClickBlueLight}>Auto BlueLight</button>
            </div>
            <div class="Alarms">
                <img class="button_img"  src="../images/alarm-btn.png" />
                <button class="Auto-Bluelight-Button" onClick={onClickAlarm}>Alarms</button>
            </div>
            <div class="data">
                <img class="button_img"  src="../images/data-btn.png" />
                <button class="Auto-Bluelight-Button" onClick={onClickEyecare}>Eye Data Care</button>
            </div>
        </div>
  )
}

export default Menubar