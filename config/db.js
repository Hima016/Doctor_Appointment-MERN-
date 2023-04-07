// const mongoose= require("mongoose")
// const colors= require('colors')

// const connectDB = async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URL)
//         console.log(`MongoDb coonected ${mongoose.connection.host}`.bgGreen.white);
//     } catch (error) {
//         console.log(`Mongodb Sever Issue ${error}`.bgRed.white);
//     }
// };

// module.exports=connectDB;
const mongoose = require("mongoose");
const colors= require('colors')

const connectDb = async() => {
    try {
        const connect = await mongoose.connect('mongodb+srv://himanshusahu:123@himanshu-1.zzag0zm.mongodb.net/doctorapp?retryWrites=true&w=majority');
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log("ee");
        process.exit(1);
    }
};

module.exports = connectDb;