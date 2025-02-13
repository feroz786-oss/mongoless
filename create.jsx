import axios from "axios";
import PageHeader from "../header/pageheader";
import { useState} from "react";
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router-dom";
function EditCourse(){
    const [course,setCourse]=useState( {
        Id:           1,
        Name:         "java",
        Duration:     "4 year",
        Price:        "5000",
        Trainer_Name: "Jk",
        Level:        "high",
        Description:  "hejeeejh",
    });
    const params=useParams();
    const navigate=useNavigate();
    const readCourseById=async()=>{
        try{
            const baseUrl='http://127.0.0.1:8080';
            const response =await axios.post(`${baseUrl}/courses/${params.id}`);
            const queriedCourse=response.data;
            setCourse(queriedCourse);

        }
        catch(error){
            alert("server error")
        }
    };
    const OnChangeBox=(event)=>{
        const newCourse ={... course};
        newCourse[event.target.id]=event.target.value;
        setCourse(newCourse);
    };
    const OnUpdate = async()=>{
        try{
            const baseUrl='http://127.0.0.1:8080';
            const response =await axios.post(`${baseUrl}/courses`,
                {...course,capacity:parseInt(course.Name),
                    Price:parseFloat(course.Price)
                }
            );
            const json=response.data;
            setCourse(json.course);
            alert(json.messaage);
            navigate(/client/react/src/Courses/list_course.jsx);
    
            
        }
        catch(error){
            alert("server error");
        }
    };
    useEffect(() => {
            readAllcourses();
        },[]);
    return (
        <>
            <PageHeader />
            <h3>
                <a href="/client/react/src/Courses/list_course.jsx" className="btn btn-dark">Go Back</a> Add Course
            </h3>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="courseId" className="form-label">Id</label>
                    <input type="text" className="form-control" id="courseId" placeholder="please enter course id" />
                    value={course.id}
                    onChange={OnChangeBox}
                </div>
                <div className="mb-3">
                    <label htmlFor="courseName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="courseName" placeholder="please enter course name" />
                    value={course.Name}
                    onChange={OnChangeBox}
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDuration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="courseDuration" placeholder="please enter course duration" />
                    value={course.Duration}
                    onChange={OnChangeBox}
                </div>
                <div className="mb-3">
                    <label htmlFor="courseTrainer" className="form-label">Trainer Name</label>
                    <input type="text" className="form-control" id="courseTrainer" placeholder="please enter course trainer name" />
                    value={course.Trainer_Name}
                    onChange={OnChangeBox}
                </div>
                <div className="mb-3">
                    <label htmlFor="courseLevel" className="form-label">Level</label>
                    <input type="text" className="form-control" id="courseLevel" placeholder="please enter course level" />
                    value={course.level}
                    onChange={OnChangeBox}
                </div>
                <div className="mb-3">
                    <label htmlFor="courseDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="courseDescription" placeholder="please enter course description" />
                    value={course.description}
                    onChange={OnChangeBox}
                </div>
                <button type="button" className="btn btn-primary" onClick={OnUpdate}>Create Course</button>
            </div>
        </>
    );
}
export default EditCourse;
