const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registration" ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() =>{
    console.log(`connection succesful`);
}).catch((e) =>{
    console.log(`connection faild`);
})