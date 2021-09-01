import authRepository from '../repositories/Auth.repository.js'
import jwt from 'jsonwebtoken'

async function createUser(user){
    let userCreated = await authRepository.createUser(user)
    userCreated.password = undefined

    const token = jwt.sign({id: userCreated._id}, process.env.SECRET, {
        expiresIn: 864000
    })
    return {
        userCreated,
        token
    }
}


async function login(user){
    let userLogin = await authRepository.login(user)
    userLogin.password = undefined
    const token = jwt.sign({id: userLogin._id}, process.env.SECRET, {
        expiresIn: 864000
    })
    return {
        userLogin,
        token
    }
}

async function logout(header){
    const parts = header.split(' ')
    const [schema, token] = parts
    await authRepository.logout(token)
}


export default {
    createUser,
    login,
    logout
}