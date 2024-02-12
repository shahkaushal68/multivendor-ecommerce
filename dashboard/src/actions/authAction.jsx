import { axiosApi } from "../apis/axiosApi";

export const doRegister = async (data) => {
    try {
        const response = await axiosApi({
            url: '/api/auth/register',
            method: "post",
            data: data
        });
        return response?.data;
    } catch (error) {
        const errMsg = error && error.response && error.response.data;
        return errMsg;
    }
}

export const doLogin = async (data) => {
    try {
        const response = await axiosApi({
            url: '/api/auth/login',
            method: "post",
            data: data
        });
        return response?.data;
    } catch (error) {
        const errMsg = error && error.response && error.response.data;
        return errMsg;
    }
}

export const doGetLoginUserDetails = async () => {
    try {
        const response = await axiosApi({
            url: '/api/user/single',
            method: "get",
        });
        return response?.data
    } catch (error) {
        const errMsg = error && error.response && error.response.data;
        return errMsg;
    }
}