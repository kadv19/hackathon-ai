import  mongoose , { Schema } from "mongoose";

const courseschema = mongoose.Schema({
     courseid : {
        type : String,
        required : true
     },

     coursename : {
        type : String,
        required : true
     },

     description : {
        type : String,
     },

     category : {
        type : String
     },

     lessos : {
        type : [],
        
     }


});

export default mongoose.model('courses', courseschema);