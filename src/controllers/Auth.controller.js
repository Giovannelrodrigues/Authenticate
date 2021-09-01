import authService from '../services/Auth.service.js'

async function createUser(req, res){
    try{
        let user = req.body
        if(!user.email || !user.password){
            return res.status(400).send({error: 'Email and password is required'})
        }
        if(user.password.length < 6){
            return res.status(400).send({error: 'Password must be six characters'})
        }
        user = await authService.createUser(user)
        res.status(200).send(user)
    }catch(err){
        return res.status(400).send({error: 'Email already exists'})
    }
}


async function login(req, res){
    try{
        let user = req.body
        if(!user.email || !user.password){
            return res.status(400).send({error: 'Email and password is required'})
        }
        user = await authService.login(user)
        res.status(200).send(user)
    }catch(err){    
        return res.status(400).send({error: 'Error sing-in'})
    }
}

async function logout(req, res){
    try{
        let header = req.headers.authorization
        await authService.logout(header)
        res.status(200).send({Logout: true})
    }catch(err){
        return res.status(400).send({error: 'Error logout'})
    }
}

export default {
    createUser,
    login,
    logout
}