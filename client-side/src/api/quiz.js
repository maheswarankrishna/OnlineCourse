import axios from 'axios';

export async function GetAllQuizes() {
    try {
        const response = await axios.get('http://localhost:64404/api/quiz');
        return response.data;

    } catch (error) {
        return error.message;
    }
}

export async function GetQuizById(id) {
    try {
        const response = await axios.get(`http://localhost:64404/api/quiz/${id}`);
        return response.data;

    } catch (error) {
        return error.message;
    }
}

export async function CreateQuiz(quiz) {
    try {
        console.log(quiz);
        const response = await axios.post('http://localhost:64404/api/quiz/CreateSingleQuiz', quiz);
        console.log(response.data);
        return response.status;

    } catch (error) {
        return error.message;
    }
}