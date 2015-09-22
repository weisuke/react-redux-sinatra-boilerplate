import React, { Component, PropTypes } from "react";
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

import './style.scss'

class ModalButton extends Component {

    render(){
        var {onToggle} = this.props
        return (
            <div className="modal-button">
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={onToggle.bind(this, true)}
                    >
                    This is a modal button component
                </Button>

                <Modal show={this.props.showModal} onHide={onToggle.bind(this, false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onToggle.bind(this, false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

ModalButton.propTypes = {
    showModal: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
};

export default ModalButton