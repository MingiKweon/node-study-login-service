"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// const login = () => {
//     console.log("bye");
// }; //const 선언을 이용하면은 

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        password: psword.value
    };

    console.log(req);
}
