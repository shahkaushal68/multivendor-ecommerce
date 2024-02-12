import { useState } from "react"
import { registerValidationOnSubmit, registerValidationOnChange } from "../validations/registerValidation";
import { doRegister } from "../actions/authAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useRegisterHook = () => {
    const [inputValues, setInputValues] = useState([]);
    const [errorMessages, setErrorMessages] = useState(null);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        const onChangeErrors = registerValidationOnChange(name, value, errorMessages);
        //console.log("onChangeErrors------------", onChangeErrors);
        setErrorMessages(onChangeErrors);
        setInputValues({
            ...inputValues,
            [name]: value
        });

    }

    const handleClick = async (event) => {
        event.preventDefault();
        const handleClickErrors = registerValidationOnSubmit(inputValues);
        if (Object.keys(handleClickErrors).length > 0) {
            setErrorMessages(handleClickErrors)
        } else {
            //console.log({ inputValues });
            const registerResponse = await doRegister(inputValues);
            console.log("registerResponse---", registerResponse);
            if (registerResponse?.status === 200) {
                navigate("/");
                toast.success(registerResponse?.message);
            } else {
                toast.error(registerResponse?.message)
            }
        }

    }

    return {
        errorMessages,
        handleChange,
        handleClick
    }
}

export default useRegisterHook
