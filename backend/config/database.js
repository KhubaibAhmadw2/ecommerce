const mongoose=require('mongoose');
const { connect } = require('tls');

const connectDatabase= ()=>{
    
mongoose.connect("mongodb://localhost:27017/Ecommerce",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`Mongodb connected with sever${data.connection.host}`)
    }).catch((err)=>{
    console.log(err)
    })
}

module.exports =connectDatabase