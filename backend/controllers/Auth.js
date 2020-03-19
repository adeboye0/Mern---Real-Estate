const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {

    register: function (req, res) {
        const { name, email, password, address, gender, phoneNumber } = req.body;
        if (!name || !email || !password || !address || !gender || !phoneNumber) {
            return res.status(400).json({ msg: 'Fill in all fields' });
        }
        User.findOne({ email }).then(user => {
            if (user) return res.status(400).json({ msg: 'User Already Exists' });

            const newUser = new User({
                name, email, password, address, gender, phoneNumber
            })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save().then(user => {
                        jwt.sign(
                            { id: user._id },
                            process.env.jwtSecret,
                            (err, token) => {
                                if (err) throw err;
                                res.json({
                                    token,
                                    user: {
                                        id: user._id,
                                        name: user.name,
                                        email: user.email,
                                        address: user.address,
                                        gender: user.gender,
                                        phoneNumber: user.phoneNumber
                                    }
                                })
                            }
                        )

                    })
                })
            })
        })
    },
    login: function (req, res) {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Fill in all fields' });
        }
        User.findOne({ email }).then(user => {
            if (!user) return res.status(400).json({ msg: 'User Does Not Exist' });
            bcrypt.compare(password, user.password).then(isMatch => {
                if (!isMatch) return res.status(400).json({ msg: 'Wrong Password' });

                jwt.sign(
                    { id: user._id },
                    process.env.jwtSecret,
                    (err, token) => {
                        if (err) throw err;
                        res.json({
                            token,
                            user: {
                                id: user._id,
                                name: user.name,
                                email: user.email
                            }
                        })
                        console.log(token);
                    }
                )
            })

        })
    },
    userData: function (req, res) {
        User.findById(req.user.id).select('-password').then(user => res.json(user));
    }
}