import React, { useState, useRef } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

export default function AddCard({ data, setData }) {
    // State management for modal visibility, selected date, and index
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [index, setIndex] = useState(0);

    // Function to close the modal
    const handleClose = () => setShow(false);
    
    // Function to show the modal
    const handleShow = () => setShow(true);

    // References for input fields
    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    // Function to handle button click and add a new goal
    const ButtonClickHandler = () => {
        // Extract title and body from input fields
        const title = titleRef.current.value;
        const body = bodyRef.current.value;

        // Check if 'data' is null or empty
        if (data == null) {
            // Initialize 'data' with a new goal entry
            setData([{ key: index, title: title, body: body, date: startDate }]);
        } else {
            // Append the new goal entry to the existing 'data' array
            setData(prevData => [{ key: index, title: title, body: body, date: startDate }, ...prevData]);
        }

        // Increment the index for the next entry
        setIndex(prev => prev + 1);
    }

    return (
        <>
            {/* Button to trigger modal */}
            <Button variant="primary" onClick={handleShow}>
                Add Goal
            </Button>

            {/* Offcanvas modal for adding a goal */}
            <Offcanvas show={show} onHide={handleClose} className='bg-dark text-white'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='display-3'>Add Goal</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="p-3">
                        <p className="lead">Title:</p>
                        {/* Input field for goal title */}
                        <input type='text' ref={titleRef} className='form-control' />
                    </div>
                    <div className="p-3">
                        <p className="lead">Date:</p>
                        {/* DatePicker for selecting a date */}
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="p-3">
                        <p className="lead">Body:</p>
                        {/* Textarea for goal body */}
                        <textarea ref={bodyRef} type='text' rows={5} className='form-control' />
                    </div>
                    <div className="p-3">
                        {/* Button to save changes and add the goal */}
                        <button className="btn btn-primary" onClick={ButtonClickHandler}>Save Changes</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
