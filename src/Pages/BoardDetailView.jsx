import React, { useEffect, useState } from 'react'
import { db } from "../firebase" 

import { Card } from "antd"
import "./Home.css";

function BoardDetailView(props) {

    const boardID = props.match.params.boardID;
    console.log("props => ", props);
    const [job, setJob] = useState([]);


    useEffect(() => {
        
        let newJob = {};
        db.collection("jobs")
         .where("uid", "==", boardID)
         .get()
         .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            newJob = doc.data();
          });
         setJob(newJob); 
         });
       }, [boardID]);

    console.log("job =>", job);

    
    return (
        <div className="card-div">
            <div>
                <Card title={job.title ? job.title : "No Title Found"}>
                    <h3>Organization: {job.orgName ? job.orgName : "No Name Found"}</h3>
                    <h3> Location: {job.location ? job.location : "No Location Found"}</h3>
                    <h3> Time: {job.time ? job.time : "No Time Found"}</h3>
                    <h3> Workers Needed: {job.workerAmount ? job.workerAmount : "Worker Amount Unspecified"}</h3>
                    <p>{job.description ? job.description : "No Description Found"}</p>
                    <h4>Contact Info: </h4>
                        <h4>{job.phone}</h4>
                        <h4>{job.email || job.phone ? job.email : "No Contact Info Found"}</h4>
                    <img src={job.imageURL ? job.imageURL : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} height='300px' alt=""/>
                </Card>
            </div>
        </div>
        
    )
}

export default BoardDetailView
