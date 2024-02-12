import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/features/authSlice";


const useHeaderHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(addUser(null));
        localStorage.removeItem('_token');
        navigate("/");
    }

    return {
        handleLogout
    }
}

export default useHeaderHook
