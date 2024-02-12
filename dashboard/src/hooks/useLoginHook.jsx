import { useState } from "react";
import { useDispatch } from 'react-redux'
import { doGetLoginUserDetails, doLogin } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setAuthHeader } from "../apis/axiosApi";
import { addUser } from "../redux/features/authSlice";

const useRegisterHook = () => {
    const [inputValues, setInputValues] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    }

    const handleClick = async (event) => {
        event.preventDefault();
        const loginResponse = await doLogin(inputValues);
        //console.log("loginResponse---", loginResponse);
        if (loginResponse?.status === 200) {
            localStorage.setItem('_token', loginResponse?.data?.token);
            setAuthHeader(`Bearer ${loginResponse?.data?.token}`);
            await getLoginUserData();
            navigate("/dashboard");
            toast.success(loginResponse?.message);
        } else {
            toast.error(loginResponse?.message)
        }
    }

    const getLoginUserData = async () => {
        const getUserDataResponse = await doGetLoginUserDetails();
        //console.log("getUserDataResponse-----", getUserDataResponse);
        if (getUserDataResponse?.status === 200) {
            dispatch(addUser(getUserDataResponse?.data))
        } else {
            toast.error(getUserDataResponse?.message)
        }
    }

    return {
        handleChange,
        handleClick
    }
}

export default useRegisterHook
