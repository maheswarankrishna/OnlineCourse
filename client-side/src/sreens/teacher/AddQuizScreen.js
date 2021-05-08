import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../../components/Screen";
import FormInput from "../../components/form/FormInput";
import { CreateQuiz } from '../../api/quiz';


export default function AddQuizScreen(props) {
    const [error, setError] = useState(false);
    // const [questions, setQuestions] = useState([]);
    // const [quiz, setQuiz] = useState({});

    const initialValues = { quizName: '', quizDescription: '' }
    const quizValidationSchema = Yup.object().shape({
        quizName: Yup.string().required().label('Quiz Name'),
        quizDescription: Yup.string().required().label('Quiz Description'),
    })
    // const questionValidationSchema = Yup.object().shape({
    //     question: Yup.string().required().label('Question'),
    //     answer1: Yup.string().required().label('Answer 1'),
    //     answer2: Yup.string().required().label('Answer 2'),
    //     answer3: Yup.string().required().label('Answer 3'),
    //     answer4: Yup.string().required().label('Answer 4'),
    //     correctAnswer: Yup.number().integer().required().label('Correct Answer'),
    // })

    const onSubmitQuiz = (reqQuiz) => { 
        var quiz = {quizName: reqQuiz.quizName, quizDescription: reqQuiz.quizDescription};
        const res = CreateQuiz(quiz); 
        res.then(result=> { result === 200 ? console.log(result) : setError(true) })
    }


    // const CreateQuestions = <>
    //     <Formik initialValues={{question:'', answer1:'', answer2:'', answer3:'', answer4:'', correctAnswer:0}} onSubmit={(values) => onSubmitQuiz(values)} validationSchema={questionValidationSchema}>
    //         {({ handleSubmit, handleChange, setFieldTouched, touched, errors }) => (
    //             <Form>
    //                 <FormInput id='quizName' name='quizName' type='text' label='Quiz Name' onBlur={() => setFieldTouched('quizName')} onChange={handleChange("quizName")} placeholder={"Quiz Name"} errors={errors.quizName} touched={touched.quizName} />
    //                 <FormInput id='quizDescription' name='quizDescription' type='text' label='Quiz Description' onBlur={() => setFieldTouched('quizDescription')} onChange={handleChange("quizDescription")} placeholder={"Quiz Description"} errors={errors.quizDescription} touched={touched.quizDescription} />
    //                 <Button variant='dark' onClick={handleSubmit}>Submit</Button>
    //             </Form>
    //         )}
    //     </Formik>
    // </>;

    return (
        
        <Screen title="Add Quiz">
            {error && <Alert variant='danger'>Failed to Create Quiz!</Alert>}
            <Formik initialValues={{ quizName: '', quizDescription: '' }} onSubmit={(values) => onSubmitQuiz(values)} validationSchema={quizValidationSchema}>
                {({ handleSubmit, handleChange, setFieldTouched, touched, errors }) => (
                    <Form>
                        <FormInput id='quizName' name='quizName' type='text' label='Quiz Name' onBlur={() => setFieldTouched('quizName')} onChange={handleChange("quizName")} placeholder={"Quiz Name"} errors={errors.quizName} touched={touched.quizName} />
                        <FormInput id='quizDescription' name='quizDescription' type='text' label='Quiz Description' onBlur={() => setFieldTouched('quizDescription')} onChange={handleChange("quizDescription")} placeholder={"Quiz Description"} errors={errors.quizDescription} touched={touched.quizDescription} />

                        <Button variant='dark' onClick={handleSubmit}>Submit</Button>
                    </Form>
                )}
            </Formik>
        </Screen>
    )
}