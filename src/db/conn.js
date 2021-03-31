const mongoose = require("mongoose");
//const conn_str = "mongodb://localhost:27017/shivam"


//creating a database
mongoose.connect("mongodb://localhost:27017/shivam",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successful")
}).catch((error)=>{
    console.log(error)
})