import React, { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default function QuizQuestionSingle({ quizQuestion }) {
    const [success, setSuccess] = useState();

    function onSelect(value) {
        if (quizQuestion.correctAnswer === value) {
            setSuccess('bg-success text-white')
        } else {
            setSuccess('bg-danger text-white')
        }
    }

    return (
        <>
            <Card style={{ width: '100%', marginTop: 10 }} >
                <Card.Header as="h6" className={success} >{quizQuestion.id} - {quizQuestion.question}</Card.Header>
                <ListGroup as='ul' variant="flush">
                    <ListGroup.Item as='li' action onClick={() => onSelect(1)}>{quizQuestion.answer1}</ListGroup.Item>
                    <ListGroup.Item as='li' action onClick={() => onSelect(2)}>{quizQuestion.answer2}</ListGroup.Item>
                    <ListGroup.Item as='li' action onClick={() => onSelect(3)}>{quizQuestion.answer3}</ListGroup.Item>
                    <ListGroup.Item as='li' action onClick={() => onSelect(4)}>{quizQuestion.answer4}</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}