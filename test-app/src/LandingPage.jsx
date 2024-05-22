import React, { useState } from "react";
import ToolBar from "./ToolBar";

export default function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const onClickLogin = () => {
        setIsLoggedIn(true)
    }
    const onClickLogout = () => {
        setIsLoggedIn(false) 
    }
    return (
        <>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{padding:10}}>소플과 함께하는 리엑트 공부!</div>
        </>
    )
}
