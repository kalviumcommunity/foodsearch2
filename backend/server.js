const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT
const env = require("dotenv");

//environment variable or you can say constants
env.config();



app.use(cors());
app.use(express.json());
mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => {
    app.listen(process.env.PORT , ()=> console.log('> Server is up and running on port : ' + process.env.PORT))
  })
  .catch((err) => {
    console.log(err);
  });



app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})



