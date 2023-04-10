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
    subCategoryImage:[
        {
            image:{
            type:String}
        }
    ],
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