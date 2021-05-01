import axios from 'axios';

export async function GetAllCourseTypes() {
    try {
        const response = await axios.get('http://localhost:64404/api/coursetype');
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export async function GetSingleCourseType(id) {
    try {
        const response = await axios.get(`http://localhost:64404/api/coursetype/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}
