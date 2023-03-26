import React, { Component } from 'react'
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
                </div>
            </>
        )
    }
}

export default MainPage