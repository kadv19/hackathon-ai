import { nanoid } from "nanoid";
import Courses from "../Schema/Courses.js";


const createUsername = async (name) => {
    const randomString = nanoid(15);
    const courseId = name.toLowerCase().replace(/\s+/g, '') + randomString; 
    return courseId;
}


export const createCourse = async ( req, res ) => {
    let { name, description, category } = req.body;
    
    try{
    if(!name || name.length < 4){
        return res.status(403).json({"error" : "Please enter a valid course name."});
    }
    if(!description){
        return res.status(403).json({"error" : "Please enter a valid description for the course."});
    }
    if(!category || category.length === 0){
        return res.status(403).json({"error" : "Please enter a valid course name"});
    }

    const courseid = await createUsername(name);
    const newCourse = new Courses({
        courseid,
        coursename : name.toLowerCase(),
        description,
        category
    })

    let course = await newCourse.save();
    return res.status(200).json({"data" : course})
   }catch (error) {
    console.log(error);
    return res.status(500).json({ "error": "An error occurred while creating a course" });
}
}

