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
        password: psword.value
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    });
}
