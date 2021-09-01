//import of modules
    import express from 'express'
    import authController from '../controllers/Auth.controller.js'
    //variables
    const router = express.Router()

//Routes
    router.post('/register', authController.createUser)
    router.post('/login', authController.login)

export default router