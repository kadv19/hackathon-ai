import  mongoose , { Schema } from "mongoose";

const reviewschema = mongoose.Schema({
     reviewid : {
        type : String,
        required : true
     },

     studentid : {
        type : String,
        required : true
     },

     lessonid : {
        type : String,
     },

     content : {
        type : [],
     },

     rating : {
        type : String,
     },

     review_date : {
        type : String,
        required : true
     }


});

export default mongoose.model('reviews', reviewschema);