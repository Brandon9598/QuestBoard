import React, { useEffect }from 'react';
import { Button, Card } from 'react-bootstrap';
import { db } from "../firebase";

function JobCard({job}) {

    useEffect(() => {
        console.log(job);
    }, [job]) //[] what do i need to watch as parent component changes

    return (
            <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" />
                  <Card.Body>
                    <Card.Title>{job.title ? job.title : "No Title Found"}</Card.Title>
                    <Card.Text>{job.location ? job.location : "No Location Found"}</Card.Text>
                    <Card.Text>Time: {job.time ? job.time : "No Time Found"}</Card.Text>
                    <Card.Text>
                        {job.description ? job.description : "No Location Found"}
                    </Card.Text>
                    <Button variant="primary">See more...</Button>
                  </Card.Body>
                </Card>
    )
}

export default JobCard;
