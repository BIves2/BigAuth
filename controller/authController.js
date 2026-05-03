const User = require('../model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { json } = require('express');

const SECRET = 'sk_123i4veppps';

/**
 * Function used to sign into BigAuth app
 * @param {*} req : request send by user
 * @param {*} res : response send by user
 * @returns 
 */
exports.signup = (req, res) => {
    const {name, email, password } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({"message"  : "All fields are required !"});
    }
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        User.createUserWithPassword(name, email, hashedPassword, (err) => {
            if(err){
                return res.status(500).send(err);
            }
            res.json({"message" : "User created successfully"});
        });
    });
};

/**
 * Function used to log into BigAuth
 * @param {*} req : request send by user
 * @param {*} res : respnse send by server
 */
exports.login = (req, res) => {
    const {email, password} = req.body;
    User.getByEmail(email, (err, result) => {
        if(err){
            return res.status(500).json({"message":err});
        }
        if(result.length === 0){
            return res.status(404).json({"message" : "User not found"});
        }
        const user = result[0];
        bcrypt.compare(password, user.password, (err, match) => {
            if(!match){
                return res.status(401).json({"message":"Wrong password"});
            }
            const token = jwt.sign(
                {id: user.id, email: user.email},
                SECRET,
                {expiresIn: "2h"}
            );
            res.json({ token });
        });
    });
}