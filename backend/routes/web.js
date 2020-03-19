const express = require('express');
const router = express.Router();
const auth = require('./route-config').auth;
const Controller = require('./route-config').Controller;

router.route('/').get(Controller.Home.index);
router.route('/add').post(auth, Controller.Home.add);
router.route('/delete/:id').delete(auth, Controller.Home.delete);
router.route('/user/like').put(Controller.Home.like);


router.route('/singleList/:id').get(auth, Controller.Home.singleList);

router.route('/register').post(Controller.Auth.register);
router.route('/login').post(Controller.Auth.login);
router.route('/user').get(auth, Controller.Auth.userData);







module.exports = router;