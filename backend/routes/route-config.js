
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config;

module.exports.notAuth = (req, res, next) => {
    if (req.session.authUser) {
        return res.redirect('/')
    }
    next()
}

module.exports.auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) return res.status(401).json({ msg: 'Unauthorized' });
    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.jwtSecret);
        // Add User
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ msg: 'Invalid Token' });
    }
}

let Controller = {};
const ctrPath = __dirname + '/../controllers/';
const ctrFiles = fs.readdirSync(ctrPath);
for (let ctr of ctrFiles) {
    if (fs.statSync(ctrPath + ctr).isDirectory()) continue;
    Controller[/.+(?=\.\w?)/.exec(ctr)[0]] = require(ctrPath + ctr)
}
module.exports.Controller = Controller

