import axios from "axios";
import CreateWorkspace from "../components/Workspace/createWorkspace";
const API_URL = import.meta.env.VITE_API_URL;

export const CheckWorkSpaceCount = async(userId,token) => {
    try {
        const response = await axios.post(
        `${API_URL}/auth/check-workspace-count/`,
        {"user": userId},
        {
            withCredentials: true,
            headers: {
            "X-CSRFToken": token,
            "Content-Type": "application/json",
            },
        }
        );
        return {
            count: response.data.workspace_count,
        };

    } catch (error) {
        console.log(error);
        return error;
    }
}

export const AddWorkspace = async(formData, token) => {
    try {
        const response = await axios.post(
        `${API_URL}/auth/add-workspace/`,
        formData,
        {
            withCredentials: true,
            headers: {
            "X-CSRFToken": token,
            "Content-Type": "application/json",
            },
        }
        );
        return {
            message:response.data.message,
            status:response.data.status
        };
    } catch (error) {
        console.log(error);
        return error;
    }    
}

export const GetMail = async(userId,token) => {
    try {
        const response = await axios.post(
        `${API_URL}/auth/get-mail/`,
        {"user":userId},
        {
            withCredentials: true,
            headers: {
            "X-CSRFToken": token,
            "Content-Type": "application/json",
            },
        }
        );
        return {
            mail:response.data.email,
        };
    } catch (error) {
        console.log(error);
        return error;
    }  
}