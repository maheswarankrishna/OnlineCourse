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

export async function GetVideosByCourseId(id) {
    try {
        const response = await axios.get(`http://localhost:64404/api/coursevideos/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}

export async function GetCoursesByTeacherId(id) {
    try {
        const response = await axios.get(`http://localhost:64404/api/Courses/getCoursesForTeacher/${id}`);
        return response.data;
    } catch (error) {
        return error.message
    }
}

export async function CreateCourse(course) {
    console.log(course.teacherId);
    try {
        const response = await axios.post('http://localhost:64404/api/courses', course);
        return response.status;
    } catch (error) {
        return error.response.status
    }
}

export async function AddVideo(video) {
    const formData = new FormData();
    formData.append('FileName', video.fileName);
    formData.append('FormFiles', video.formFiles);
    formData.append('CourseId', video.courseId);
    formData.append('description', video.description);
    console.log(formData);
    try {
        const response = await axios.post('http://localhost:64404/api/coursevideos', formData);
        return response.status;
    } catch (error) {
        return error.response.status
    }
}
