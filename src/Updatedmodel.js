import React, { Component } from 'react'
import { Modal, Button,Form } from 'react-bootstrap';


class Updatedmodel extends Component {
    render() {
        console.log(this.props.title);
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
                            <Form.Control type="text"  defaultValue={this.props.title} name='title' />
                          
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>img</Form.Label>
                            <Form.Control type="text"  defaultValue={this.props.imageUrl} name='imageUrl'/>
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
