import axios from "axios";
import Cookies from "js-cookie";
const API_URL = import.meta.env.VITE_API_URL;

// GetCSRFToken
export const getCsrfToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/auth/get-csrf-token/`, {
      withCredentials: true,
    });
    const token = response.data.csrftoken;

    if (token) {
      Cookies.set("csrftoken", token, {
        expires: 1,
        sameSite: "Lax",
        secure: false,
      });
    }
  } catch (error) {
    console.log("failed to get csrf token");
  }
};

// SignUp
export const CreateUser = async (formData, token) => {
  try {
      const CreateUserResponse = await axios.post(
        `${API_URL}/auth/sign-up/`,
        formData,
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": token,
            "Content-Type": "application/json",
          },
        }
      );
      // Ensure the structure of the response is correct
      return {
        status: CreateUserResponse.data.status,
        message: CreateUserResponse.data.message,
      };
  } catch (error) {
    return error;
  }
};


//SignIn
export const LoginUser = async (formData, token) => {
  try {
    const response = await axios.post(`${API_URL}/auth/sign-in/`, formData, {
      withCredentials: true,
      headers: {
        "X-CSRFToken": token,
        "Content-Type": "application/json",
      },
    });
    return {
      userId:response.data.userId,
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return "failed";
  }
};

// SendResetLink
export const SendResetLink = async (formData, token) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/send-reset-link/`,
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
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};

// UpdatePassword
export const UpdatePass = async (formData, uidb64, token, csrftoken) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/reset-password/${uidb64}/${token}/`,
      formData,
      {
        withCredentials: true,
        headers: {
          "X-CSRFToken": csrftoken,
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: response.data.status,
      message: response.data.message,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};


