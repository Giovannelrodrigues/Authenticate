//import of modules
    import mongoose from "../database/db.js";
    import bcrypt from 'bcrypt'

//Model of Users
    const UserSchema = mongoose.Schema({
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    }, {
        timestamps: true
    })

//Hash password

UserSchema.pre('save', function(){
    this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('User', UserSchema)

export default User