import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditCards from './EditCards';

export default function Cards({ data, setData }) {
    return (
        data.map(goal =>
            <Card
                key={goal.key}
                bg='dark'
                text='white'
                style={{ margin: '2px auto' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{goal.Title}</Card.Title>
                    <Card.Text>
                        {goal.body}
                    </Card.Text>
                    <EditCards data={data} setData={setData} goal={goal} />
                </Card.Body>
            </Card>
        )
    )
}
