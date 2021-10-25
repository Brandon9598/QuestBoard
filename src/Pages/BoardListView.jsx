import React from 'react'
import { Button, Card } from 'react-bootstrap';

function BoardListView() {
    return (
        <div>

          <section className="p-5">
            <div className="container">
              <div className="row text-cetner">
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.mountsinai.on.ca/wellbeing/images/image-placeholder/image" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>Location: ABC</Card.Text>
                    <Card.Text>Time: 1:00 - 2:00 </Card.Text>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.  
                    </Card.Text>
                    <Button variant="primary">See more...</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </section>
        </div>

    )
}

export default BoardListView;
