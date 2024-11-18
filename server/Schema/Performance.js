import  mongoose , { Schema } from "mongoose";

const performaceschema = mongoose.Schema({
     performanceid : {
        type : String,
        required : true
     },

     studentid : {
        type : String,
        required : true
     },

     correctquestion : {
        type : [],
     },

     wrongquestion : {
        type : []
     },

     completion_date : {
        type : String,
        required : true
     }


});

export default mongoose.model('performance', performaceschema);