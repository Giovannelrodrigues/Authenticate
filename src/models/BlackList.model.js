//import of modules
    import mongoose from "../database/db.js";

//Model of black list
    const blacklistSchema = mongoose.Schema({
        token: {
            type: String
        },
        createdAt: {
            type: Date,
            expires: '20m',
            default: Date.now()
        }
    })

const BlackList = mongoose.model('BlackList', blacklistSchema)

export default BlackList