import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import JobCard from '../Components/JobCard';
import "./Home.css"
import { Button } from 'react-bootstrap'

function BoardListView() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const newJobs = [];
    db.collection("jobs")
     .get()
     .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        //  console.log(doc.id, " => ", doc.data());
        newJobs.push(doc.data());
      });
      setJobs(newJobs); 
     });
   }, []);

  
    return (
        <div>
          <div className="makeJob-button" >
          <Button variant="success" size="lg" href={`/makejob`}>Create Quest!</Button>
          </div>
          
          <section className="p-5">
            <div className="container">
              <div className="row text-center"> 
                  { jobs.map(job => <JobCard job={job}/>) }
              </div>
            </div>
          </section>
        </div>
    )
}

export default BoardListView;
