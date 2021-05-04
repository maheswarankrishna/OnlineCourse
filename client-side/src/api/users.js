import axios from 'axios';

export async function GetUserTypes() {
    try {
        const response = await axios.get('http://localhost:64404/api/auth/GetAllUserTypes');
        return response.data;
    } catch (error) {
        return error.message;
    }
}

export async function LoginUser(user) {
    try {
        const response = await axios.post(`http://localhost:64404/api/auth/login`, user);
        
        // set local storage
        if (localStorage.getItem('user')) { localStorage.removeItem('user') }

        var userObj = { id: response.data.id, userType: response.data.userType }
        localStorage.setItem("user", JSON.stringify(userObj))

        return response.status;
    } catch (error) {
        return error.response.status;
    }
}

export async function RegisterUser(user) {
    try {
        const response = await axios.post(`http://localhost:64404/api/auth/register`, user);
        return response.status;
    } catch (error) {
        return error.response.status;
    }
}

export async function LogoutUser(id) {
    localStorage.clear();
}

// Get userId of logged in user
export const getUserId = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (!localStorage.getItem('user')) {
        return null;
    } else {
        return user;
    }
};