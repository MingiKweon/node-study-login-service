"use strict";

class UserStorage {
    static #users = {
        id: ["kmingi159", "1gun", "epicviolet0216"],
        psword: ["0000", "1234", "4321"],
        name: ["권민기", "최원건", "김민수"]
    };

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
}
//#는 private개념


//클래스 안에는 const 같은 선언이 필요없다.
module.exports = UserStorage;