import React, { useEffect, useState } from "react";
import { Media } from "react-bootstrap";

import QuizIcon from "../../assets/quiz-icon.png";
import QuizModalView from './QuizModalView';

import { GetQuizById } from '../../api/quiz';

export default function QuizCard({ id, name, description }) {
  const [modal, setModal] = useState(false);
  const [questions, setQuestions] = useState([]);

  // getting the questions from the quiz
  useEffect(() => {
    let mounted = true;
    const res = GetQuizById(id);
    if (mounted) { res.then(result => setQuestions(result.quizQuestions)) }
    return () => mounted = false;
  }, [])

  return (
    <>
      <Media style={{ border: '1px solid #D9DDDC', marginTop: 5, padding: 10 }} onClick={() => setModal(true)}>
        <img
          width={60}
          height={60}
          className="mr-3"
          src={QuizIcon}
          alt="Video placeholder"
        />
        <Media.Body style={{ alignItems: 'center', marginTop: 'auto', marginBottom: 'auto' }}>
          <h6>{name}</h6>
          <p>{description}</p>
        </Media.Body>
      </Media>

      <QuizModalView show={modal} hide={() => setModal(false)} name={name} questions={questions} />
    </>
  );
}

