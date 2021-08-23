import React, { Component } from 'react'
import {Modal,Form, Button } from 'react-bootstrap'


export class UpdateModal extends Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.updateFun}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.name} name='name' />
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>image</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.img} name='img' />
                                
                            </Form.Group> <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>level</Form.Label>
                                <Form.Control type="text" defaultValue={this.props.selectData.level} name='level' />
                                
                            </Form.Group>

                          
                            <Button variant="primary" type="submit">
                                update
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                      
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default UpdateModal
