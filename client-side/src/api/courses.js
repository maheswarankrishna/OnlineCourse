import axios from 'axios';

export async function GetAllCourses() {
    try {
        const response = await axios.get('http://localhost:64404/api/courses');
        return response.data;

    } catch (error) {
        return error.message;
    }
}

export async function GetSingleCourse(id) {
    try {
        const response = await axios.get(`http://localhost:64404/api/courses/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}

export async function GetVideosByCourseId(id){
    try {
        const response = await axios.get(`http://localhost:64404/api/coursevideos/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}