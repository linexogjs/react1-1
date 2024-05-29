import { useState } from "react";

export default function SignUp() {
    const [name, setName] = useState();
    const [gender, setGender] = useState("남자");
    const [test, setTest] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangeGender = (e) => {
        setGender(e.target.value);
    }
    
    const handleChangeTest = (e) => {
        setTest(e.target.value);
    }
    const handleSubmit = (e) => {
        alert(`이름: ${name}, 성별: ${gender}, 텍스트 입력: ${test}`);
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" placeholder="이름을 입력하세요." value={name} onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>
            <br/>
            <label>
                텍스트 입력:
                <textarea value={test} onChange={handleChangeTest} placeholder="본문을 입력하세요"></textarea>
            </label>
            <br/>
            <button type="submit">제출</button>
        </form>
    );
}
