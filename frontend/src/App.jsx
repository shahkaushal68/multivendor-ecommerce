
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css"
import routeList from "./routes";
//import ProtectedRoute from "./routes/protectedRoute";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          routeList &&
          routeList?.map((routeItem, routeIndex) => {
            return (
              <Route key={routeIndex} path={routeItem?.path} element={routeItem?.element} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
