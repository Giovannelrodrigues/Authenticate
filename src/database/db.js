//Import of modules
    import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Ecommerce', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect database')
}).catch((err) => {
    console.log('Error connect database' + err)
})

export default mongoose
