import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function EditCards({ data, setData, goal }) {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date(goal.date));

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const titleRef = useRef(null);
    const bodyRef = useRef(null); // Changed variable name to match the ref

    const ButtonClickHandler = () => {
        const newArray = data.filter((card) => card.key !== goal.key);
        const body = bodyRef.current.value;
        const title = titleRef.current.value;
        setData([{ key: goal.key, title: title, body: body, date: startDate }, ...newArray]);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Post
            </Button>

            <Offcanvas show={show} onHide={handleClose} className='bg-dark text-white'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Edit Goal</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="p-3">
                        <p className="lead">Title:</p>
                        <input type='text' ref={titleRef} className='form-control' defaultValue={goal.title} />
                    </div>
                    <div className="p-3">
                        <p className="lead">Date:</p>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="p-3">
                        <p className="lead">Body:</p>
                        <textarea ref={bodyRef} type='text' rows={5} className='form-control' defaultValue={goal.body} />
                    </div>
                    <div className="p-3">
                        <button className="btn btn-primary" onClick={ButtonClickHandler}>Save Changes</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
