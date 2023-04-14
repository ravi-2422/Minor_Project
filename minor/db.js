const mongoose = require('mongoose')
//const mongouri ="mongodb://127.0.0.1:27017/app"
const mongouri ="mongodb+srv://ravirkumar2422:Ravi@cluster0.ol2qhkm.mongodb.net/Ecommerce?retryWrites=true&w=majority"


const connectToMongo =async ()=>{
    mongoose.connect(mongouri,()=>{
         console.log('connected to mongose succesfullly')
    })
}
module.exports= connectToMongo;