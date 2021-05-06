import express from 'express';
import {saveUser } from '../controllers/create-user.controller';
import {getUser } from '../controllers/get-user.controller';
const router = express.Router();


router.post('/user', saveUser);
router.get('/user/:id', getUser);
// router.get('/user-test', UserController.test);

export default router;