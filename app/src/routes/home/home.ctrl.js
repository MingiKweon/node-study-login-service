"use strict";

const users = {
    id: ["kmingi159", "1gun", "epicviolet0216"],
    psword: ["kmg136528", "1234", "4321"]
};

const output = {

    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                console.log("login complete");
                return res.json({
                    success: true,
                });
            } else {
                console.log("wrong password!");
                return res.json({
                    success: false,
                    msg: "로그인에 실패하셨습니다."
                });
            }
        } else {
            console.log("undefined id");
            return res.json({
                success: false,
                msg: "로그인에 실패하셨습니다."
            });
        }
    }

}

module.exports = {
    output,
    process
};