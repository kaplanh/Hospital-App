import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({ show, handleClose, drName, apps, setApps }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    const handleSubmit = (e) => {
        e.preventDefault();
        setApps(...apps, {
            id: new Date().getTime(),
            patient: name,
            day: date,
            consulted: false,
            doctor: drName,
        });
        setName("");
        handleClose();
    };
    

    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Reservation for{" "}
                    <span className="text-danger">{drName}</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Patient Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Date&&Time</Form.Label>
                        <Form.Control
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        />
                    </Form.Group>

                    <div className="text-end ">
                        <Button variant="outline-success mx-2" type="submit">
                            Save
                        </Button>
                        <Button variant="outline-danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddModal;
