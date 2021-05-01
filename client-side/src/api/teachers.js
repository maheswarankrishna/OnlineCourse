import axios from 'axios';

export async function GetAllTeachers(){
    try {
        const response = await axios.get(`http://localhost:64404/api/Auth/GetAllTeachers`);
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export async function ApproveTeachers(user){
    try {
        const response = await axios.put(`http://localhost:64404/api/Auth/ToggleTeacherStatus`, user);
        return {"data": response.data, "status":response.status};
    } catch (error) {
        return error.message;
    }
}