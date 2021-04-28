import axios from 'axios';

export async function GetAllCourses() {
    try {
        const response = await axios.get('http://localhost:64404/api/courses');
        return response.data;

    } catch (error) {
        console.log(error.message);
    }
}