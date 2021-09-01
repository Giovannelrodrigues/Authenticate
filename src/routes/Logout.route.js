import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import authController from '../controllers/Auth.controller.js'
const router = express.Router()

router.use(authMiddleware, authController.logout)
router.get('/', (req, res) => {
    res.send({ok: true})
})

export default router