import React, { useEffect }from 'react';
import { Button, Card } from 'react-bootstrap';
import "../Pages/Home.css"

function JobCard({job}) {

    useEffect(() => {
        console.log(job);
    }, [job]) //[] what do i need to watch as parent component changes


    return (
          <div className="board-card">
            <Card style={{ width: '18rem'}}>
                  <Card.Img variant="top" src={job.imageURL ? job.imageURL : "https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" } />
                  <Card.Body>
                    <Card.Title>{job.title ? job.title : "No Title Found"}</Card.Title>
                    <Card.Text>{job.location ? job.location : "No Location Found"}</Card.Text>
                    <Card.Text>Time: {job.time ? job.time : "No Time Found"}</Card.Text>
                    <Card.Text className="card-desc">
                        {job.description ? job.description : "No Description Found"}
                    </Card.Text>
                    <Button variant="primary" href={`/board/${job.uid}`}>See more...</Button>
                  </Card.Body>
                </Card>
          </div>
    )
}

export default JobCard;
