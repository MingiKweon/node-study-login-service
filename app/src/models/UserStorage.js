"use strict";

class UserStorage {
    static #users = {
        id: ["kmingi159", "1gun", "epicviolet0216"],
        psword: ["0000", "1234", "4321"],
        name: ["권민기", "최원건", "김민수"]
    }; //이렇게 되면은 서버를 껐을 때 의미가 없어짐. -> DB

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {}); //reduce 메소드 //hasOwnProperty == 해당 키 값이 있냐 물어보는거임.
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //이게 list가 되는거임?
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        console.log(users);

        return { success: true };
    }
}
//#는 private개념


//클래스 안에는 const 같은 선언이 필요없다.
module.exports = UserStorage;