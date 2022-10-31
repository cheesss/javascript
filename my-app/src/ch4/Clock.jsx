import React from "react";

var options = {second: "numeric"};
function Clock(props){
    return (
        <div>
            <h1>hi react!!</h1>
            <h2>now: {new Date().toLocaleDateString("en-US",options)}</h2>
        </div>
    )
}

export default Clock;
// props 함수에 들어가는 인수, component 들어온 인수를 표시할 형식(함수), element 들어온 요소를 컴포넌트에 넣어 만들어진 결과물
// props는 변경할 수 없다, 새로운 값을 컴포넌트에 전달해 element를 만들면 된다
// 컴포넌트 이름은 대문자로 시작해야한다