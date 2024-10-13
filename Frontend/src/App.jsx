import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyParcels from "./pages/MyParcels";
import Parcels from "./pages/Parcels";
import Parcel from "./pages/Parcel";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/myparcels",
      element: <MyParcels /> ,
    },
    {
      path: "/allparcels",
      element: <Parcels /> ,
    },
    {
      path: "/parcel/:id",
      element:  <Parcel /> ,
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
