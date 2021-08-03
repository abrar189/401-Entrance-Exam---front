import React, { Component } from 'react'
import { Modal, Button,Form } from 'react-bootstrap';


class Updatedmodel extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showmodel} onHide={this.props.handelclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updatedData} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>color titel</Form.Label>
                            <Form.Control type="text" placeholder="Enter color" defaultValue={this.props.title} />
                          
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>img</Form.Label>
                            <Form.Control type="text" placeholder="image" defaultValue={this.props.imageUrl}/>
                        </Form.Group>
                       
                        <Button variant="primary" type="submit" onClick={this.props.handelclose}>
                            Submit
                        </Button>
                    </Form></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handelclose}>
                            Close
                        </Button>
                       
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Updatedmodel
