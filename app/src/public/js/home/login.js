"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// const login = () => {
//     console.log("bye");
// }; //const 선언을 이용하면은 인터프리터가 해당 줄을 확인하지 못할 수도 있어서..

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value //value로 접근하는것
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
    
    
    //화살표 함수를 한 줄로 짤 때는 => 다음에 오는 값이 반환값이 됩니다!
}
//login과 연결되어 있는 js이라서 이 코드들은 프론트임.