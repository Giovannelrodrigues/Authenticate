//import of modules
    import express from 'express'
    import env from 'dotenv'
    import bodyParser from 'body-parser'
    import authRoutes from './routes/Auth.routes.js'
    import LogoutRoutes from './routes/Logout.route.js'
    //variables
        const app = express()

//Settings
    //File of settings
        env.config()
    //BodyParser
        app.use(bodyParser.urlencoded({extended: false}))
    //Use Json
        app.use(express.json())

//Routes
    app.use('/auth', authRoutes)
    app.use('/auth', LogoutRoutes)

//Server
    app.listen(process.env.PORT, () => {
        console.log('Server is running on port: ' + process.env.PORT)
    })