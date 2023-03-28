import React, { Component } from 'react'
import { SpinnerDotted } from 'spinners-react';
//style
import "../../../Styles/MainPage/MainPage.css";

import logo from "../Login//Logo2.png"
export class MainPage extends Component {
    render() {
        return (
            <>
                <div className="mainpage-wrapper">
                    <div className="mainpage-container">
                        <div className="doctalk-logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <SpinnerDotted thickness ="100" size ="40" speed = "100" secondaryColor='var(--main-pink)' color ="var(--main-white)" />
                </div>
            </>
        )
    }
}

export default MainPage