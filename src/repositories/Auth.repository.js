import User from '../models/User.model.js'
import BlackList from '../models/BlackList.model.js'
async function createUser(user){
    if(!await User.findOne({email: user.email})){
        let newUser = {
            email: user.email,
            password: user.password
        }
        await User.create(newUser)
        return await User.findOne({email: user.email})
    }else{
        throw new Error('Email already exists')
    }

}

async function login(user){
    const userSeach = User.findOne({email: user.email})
    if(!userSeach){
        throw new Error('Email not found')
    }else{
        return userSeach
    }
}

async function logout(token){
    await BlackList.create({token: token})
}

export default {
    createUser,
    login,
    logout
}