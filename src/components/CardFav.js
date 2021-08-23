import React, { Component } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'


export class CardFav extends Component {
    render() {
        return (
            <div>
                 <Row xs={1} md={4} className="g-4">
            {this.props.dataBok.map((item, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>{item.name} </Card.Title>
                    <Card.Text>
                      {item.level}
                    </Card.Text>
                  </Card.Body>
                  <Button variant="primary" onClick={() => { this.props.deleteFun(idx) }}>
                    delete
                  </Button>
                  <Button variant="primary" onClick={() => { this.props.handleshow(idx) }}>
                    update
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
            </div>
        )
    }
}

export default CardFav
