//import { UserRoles } from "../constants/constants";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import ProductsListing from "../pages/ProductsListing";
import Register from "../pages/Register";




export const routeList = [
    {
        path: "/",
        element: <Login />,
        isVisible: true,
        isAuth: false,
        accessRoles: [],
    },
    {
        path: "/register",
        element: <Register />,
        isVisible: true,
        isAuth: false,
        accessRoles: [],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        isVisible: true,
        isAuth: true,
        accessRoles: ['User', 'Admin'],
    },
    {
        path: "/products",
        element: <ProductsListing />,
        isVisible: true,
        isAuth: true,
        accessRoles: ['Admin'],
    }
]    