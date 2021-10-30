import React, { useEffect, useState } from 'react'
import { db } from "../firebase";
import JobCard from '../Components/JobCard';

function BoardListView() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    db.collection("jobs")
     .get()
     .then((querySnapshot) => {
       const newJobs = [];
      querySnapshot.forEach((doc) => {
        //  console.log(doc.id, " => ", doc.data());
        newJobs.push(doc.data());
      });
      setJobs(newJobs); 
     });
   }, []);
  
    return (
        <div>
          <section className="p-5">
            <div className="container">
              <div className="row text-cetner">
                  { jobs.map(job => <JobCard job={job}/>) }
              </div>
            </div>
          </section>
        </div>
    )
}

export default BoardListView;
