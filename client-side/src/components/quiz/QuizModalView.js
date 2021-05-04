import React from "react";
import { Button, Modal } from 'react-bootstrap';

import QuizQuestionSingle from './QuizQuestionSingle';

function QuizModalVew({ name, show, hide, questions }) {

    return (
        <>
            <Modal show={show} onHide={hide} centered size='xl' scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {Array.isArray(questions) && questions.map(question => <QuizQuestionSingle key={question.id} quizQuestion={question} />)}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="dark" onClick={hide}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default QuizModalVew;

