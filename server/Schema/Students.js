import  mongoose , { Schema } from "mongoose";

const studentsschema = mongoose.Schema({
     personal_details : {
          name : {
            type : String,
            lowercase : true, 
            required : true,
          },

          email : {
            type : String,
            lowercase : true,
            required : true,
            unique : true
          },

          studentid : {
            type : String,
            required : true,
            unique : true
          },

          password : {
            type : String,
            required : true
          }
     },

     class : {
        type : String,
     },

     videos_watched : {
        type : []
     },

     topics_covered : {
        type : []
     },

     questtions_answered : {
        type : []
     }


});

export default mongoose.model('students', studentsschema);