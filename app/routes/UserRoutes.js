const router = require('express').Router();
const verify = require('../../VerifyToken');
const UserControl = require('../controllers/UserControl');
    
//  User registration route

router.post('/create', UserControl.create);

/*
*   User update route
*
*   TODO:
*       Make two separate routes for updating users
*       one should be for users to change their own
*       data and another one for the admin to chan-
*       ge other users information.
*/

router.put('/update', verify.auth, UserControl.update);

router.put('/gradeActivity', verify.auth, UserControl.gradeActivity);

router.put('/uploadActivity', verify.auth, UserControl.uploadActivity);

//  User data retrieval route

router.get('/retrieve', verify.auth, UserControl.retrieve);

//  User deletion route

router.delete('/delete', verify.authsu, UserControl.delete);

module.exports = router;