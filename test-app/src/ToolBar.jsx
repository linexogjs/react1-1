import React from "react";

const style = {
    wrapper:{
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid gray"
    }
}
export default function ToolBar(props) {
    
    const  {isLoggedIn, onClickLogin, onClickLogout} = props
    return (
        <div style={style.wrapper}>
            {isLoggedIn && <span>환영합니다.</span>}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )}
        </div>
    )
}
