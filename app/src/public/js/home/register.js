"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button"); //defer

// const register = () => {
//     console.log("bye");
// }; //const 선언을 이용하면은 인터프리터가 해당 줄을 확인하지 못할 수도 있어서..

registerBtn.addEventListener("click", register);

function register() {
    
    if (psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.")
    }
    
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    })
    
    
    //화살표 함수를 한 줄로 짤 때는 => 다음에 오는 값이 반환값이 됩니다!
}
//login과 연결되어 있는 js이라서 이 코드들은 프론트임.