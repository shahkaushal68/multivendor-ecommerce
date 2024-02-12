import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import './App.css';
import { routeList } from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { doGetLoginUserDetails } from "./actions/authAction";
import { addUser } from "./redux/features/authSlice";
import { ProtectedRoute } from "./routes/privateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserDetail = async () => {
      try {
        const response = await doGetLoginUserDetails();
        if (response?.status === 200) {
          dispatch(addUser(response?.data[0]));
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    getUserDetail();
  }, []);




  return (
    <BrowserRouter>
      <Routes>
        {
          routeList?.length > 0 &&
          routeList?.map((routeItem, routeIndex) => {
            //console.log("routeItem----------", routeItem);
            return (
              <Route
                key={`routeIndex${routeIndex}`}
                path={routeItem.path}
                element={
                  <ProtectedRoute
                    isAuth={routeItem.isAuth}
                    roles={routeItem.accessRoles}
                    isVisible={routeItem?.isVisible}
                  >
                    {routeItem.element}
                  </ProtectedRoute>
                }
              />
            )
          })
        }
      </Routes>

    </BrowserRouter>


  )
}

export default App
