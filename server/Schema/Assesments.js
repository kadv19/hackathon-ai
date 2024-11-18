import  mongoose , { Schema } from "mongoose";

const assesmentschema = mongoose.Schema({
     assesntid : {
        type : String,
        required : true
     },

     lessonid : {
        type : String,
        required : true
     },

     title : {
        type : [],
     },

     type : {
        type : String,
     },

     questions : {
        type : [],
     }


});

export default mongoose.model('performance', performaceschema);