const mongoose = require('mongoose')    
const category = new mongoose.Schema({
    country:{
        type:String,
        required:true,
    },
    countryImage:{
        type:String,
        required:true,
    },
    CategoryImage:{
        type:String,
        required:true
    },
    subCategory:[
        {
            foodType:{
                type:String
            },
            foodImage:{
                type:String
            }
        }
    ]
})
module.exports =  mongoose.model( 'category' , category)