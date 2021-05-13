const { response } = require("express");
const { User } = require("../models");

//helpers
let { generateToken } = require("../helpers/jwtToken");

class UserController {
    static registerUser(req, res, next){
        let {full_name, password, jenis_kelamin, nik, agama, tempat_tglLahir, no_hp, email} = req.body;

        User.create({
            full_name,
            jenis_kelamin,
            nik,
            agama,
            tempat_tglLahir,
            no_hp,
            email,
            password
        }).then((userdata) => {
            res.status(200).json({message: "Register Success!", user: userdata.dataValues});
        }).catch(next);
    }

    static loginUser(req, res, next){
        let {email, password} = req.body;

        User.findOne({where: {email}}).then(async (userdata) => {
            if(!userdata){
                return res.status(404).json({message: "User not found. Please register!"});
            } else {
                if(!userdata.dataValues.password || !await userdata.validPassword(password, userdata.dataValues.password)){
                    return res.status(403).json({message: "Maaf, password anda salah!"});
                } else {
                    let token = generateToken({id: userdata.dataValues.user_id, full_name: userdata.dataValues.full_name});
                    return res.status(200).json({message: "You've successfully logged in!", token});
                }
            }
        }).catch(next);
    }

    static readDataUser(req, res, next){
        let userid = req.decoded.id;

        User.findOne({where: {user_id: userid}})
        .then((userdata) => {
            return res.status(200).json({data: userdata.dataValues});
        }).catch(next);
    }
}

module.exports = UserController;