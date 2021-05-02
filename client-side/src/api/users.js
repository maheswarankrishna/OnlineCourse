import axios from 'axios';

export async function GetUserTypes(){
    try {
        const response = await axios.get('http://localhost:64404/api/auth/GetAllUserTypes');
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export async function LoginUser() {
    try {
        // const response = await axios.get('http://localhost:64404/api/courses');
        // return response.data;

    } catch (error) {
        return error.message;
    }
}

export async function RegisterUser(user) {
    console.log(user);
    try {
        const response = await axios.post(`http://localhost:64404/api/auth/register`, user);
        return response.status;
    } catch (error) {
        return error.response.status;
    }
}

export async function LogoutUser(id){
    try {
        // const response = await axios.get(`http://localhost:64404/api/coursevideos/${id}`);
        // return response.data;
    } catch (error) {
        return error.message
    }
}