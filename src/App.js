import { BrowserRouter, Routes, Route} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom"

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
  ];
  let routesElement = useRoutes(routesArray);

  return(
    <AuthProvider>
      <div>{routesElement}</div>
    </AuthProvider>
  )
}

export default App;
