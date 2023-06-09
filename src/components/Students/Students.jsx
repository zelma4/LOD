import "./Students.css"
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"


const Students = () => {
  const students = useLoaderData();
  return (
    <div className="back">
      <div className="students_nav">
        <Navbar />
      </div>
      <div className="students_container">
      {
        students.map((student) => (
          <div className="students_box">
            <div className="student_info">
              <span>{student.name}, </span>
              <span>{student.age} y.o.</span>
              {/* <p>{student.email}</p> */}
            </div>
            <div className="student_image_box">
              <a href={`mailto:${student.email}`}>
                <img src={student.photo} alt="student_image" className="student_image"  />
              </a>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Students