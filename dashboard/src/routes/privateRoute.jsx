import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, isAuth, roles }) => {

    // const roles1 = [...roles]
    const { user = {} } = useSelector((state) => state?.auth);
    const token = localStorage.getItem("_token");
    const isAuthenticated = !!token;
    //const isRoleAccess = roles?.findIndex((item) => item.toLowerCase() === user?.userprofiles?.role[0]?.name.toLowerCase());
    const isRoleAccess = roles?.includes(user?.userprofiles?.role[0]?.name);



    // console.log({
    //     user,
    //     isAuth,
    //     roles,
    //     token,
    //     isAuthenticated,
    //     isRoleAccess
    // });

    // if (isAuth && token) {
    //     return children;
    // }

    // if (isAuthenticated === false) {
    //     return <Navigate to={"/"} />
    // }

    //return children;

    if (isAuthenticated && isRoleAccess) {
        return children
    } else if (isAuth && token && user) {
        return children;
    } else if (!isAuthenticated) {
        return <Navigate to="/" />
    } else {
        return children;
    }



    // return token ? (
    //     children
    // ) : isAuthenticated && isRoleAccess !== -1 ? (
    //     children
    // ) : isAuth && token === null ? (
    //     <Navigate to="/" />
    // ) : (
    //     children
    // );
};