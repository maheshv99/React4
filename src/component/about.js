import React from "react";
import "./std.css";

function About() {
  const list = [
    {
      name: "Jhon",
      age: 24,
      course: "MERN",
      batch: "October",
      change: "Edit",
    },
    {
      name: "Doe",
      age: 25,
      course: "MERN",
      batch: "November",
      change: "Edit",
    },
    {
      name: "Biden",
      age: 26,
      course: "MERN",
      batch: "October",
      change: "Edit",
    },
    {
      name: "Barar",
      age: 24,
      course: "MERN",
      batch: "September",
      change: "Edit",
    },
    {
      name: "Christ",
      age: 23,
      course: "MERN",
      batch: "October",
      change: "Edit",
    },
    {
      name: "Elent",
      age: 24,
      course: "MERN",
      batch: "November",
      change: "Edit",
    },
    {
      name: "mahesh",
      age: 21,
      course: "MERN",
      batch: "July",
      change: "Edit",
    },
  ];
  return (
    <div className="outer">
      <div className="stdheader">
        <h1>Student Details</h1>
        <button>Add new student</button>
      </div>
      <div className="stddetails">
        <div className="stdDescHeader">
          <h4>Name</h4>
          <h4>Age</h4>
          <h4>Course</h4>
          <h4>Batch</h4>
          <h4>Change</h4>
        </div>
        {list.map((item) => (
          <div>
            <hr className="line" />
            <div className="stdDescHeader">
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.course}</p>
              <p>{item.batch}</p>
              <p className="editbtn">{item.change}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;
