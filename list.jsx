import axios from "axios";
import PageHeader from "../header/pageheader";
import { useState} from "react";
import {useNavigate} from "react-router-dom";


function CourseList() {
    const [course,setCourse]=useState( {
        Id:           1,
        Name:         "java",
        Duration:     "4 year",
        Price:        "5000",
        Trainer_Name: "Jk",
        Level:        "high",
        Description:  "hejeeejh",
    });
    const readAllcourses = async () => {
        try{
        const baseUrl = "https://localhost:8080"
      
            const response = await axios.get('${baseUrl}/course')
            const queriedcourse = response.data;
            setcourses(queriedcourse);
        }
        catch(error){
            alert('Server Error');
        }
    };
    useEffect(() => {
        readAllcourses();
    },[]);
    const onDelete = async(id)=>{
        if(!confirm("are you sure")){
            return
        }
        try{
            const baseUrl='http://127.0.0.1:8080';
            const response =await axios.delete(`${baseUrl}/courses/${id}`);
            alert(response.data.message);
            readAllcourses();
        }
        catch(error){
            alert("server error");
        }
    };
    
    return(
        <>
        <pageheader/>
        <h3>✒️List of Course</h3>
  
  <div className="container-fluid">
   <table className="table table-success table-striped table-bordered">
   <thead className="table-dark">
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Duration</th>
       <th scope="col">Price</th>
       <th scope="col">Trainer_Name</th>
       <th scope="col">Level</th>
       <th scope="col">Description</th>
       <th>

       </th>
       
       
     </tr>
   </thead>
   <tbody>
   {CourseList.map(
    (course)=>{return(<tr>
        <th scope="row">{course.Id}</th>
        <th>{course.Name}</th>
        <th>{course.Duration}</th>
        <th>{course.Price}</th>
        <th>{course.Trainer_Name}</th>
        <th>{course.Level}</th>
        <th>{course.Description}</th>
        <td><a href={`/cars/view/${course.id}`} 
            className="btn btn-success">View</a>
            <a href={`/cars/edit/${course.id}`} 
                                className="btn btn-warning">Edit</a>
            <a
        href="/client/react/src/Courses/edit_course.jsx"
        className="btn btn-success" onClick={()=>onDelete(course.id)}>Delete
        </a>
      </td>
    </tr>)
    }
   )}
   </tbody>
   
 </table>
</div>
        
        </>
    ) ;
}
export default CourseList;
