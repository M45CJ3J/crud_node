const mongoose = require('mongoose');
const connectdb = async()=>{
    try {
        const con = await mongoose.connect(process.env.mongo_url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        })
        console.log(`mongodb connected : ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);


    }
}

module.exports = connectdb