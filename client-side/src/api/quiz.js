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