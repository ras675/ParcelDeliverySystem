import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../src/componets/Navbar";
import Footer from "../src/componets/Footer";
import Menu from "../src/componets/Menu";
import Home from "../src/pages/Home";
import Parcels from "../src/pages/Parcels" ;
import Users from "../src/pages/Users";
import NewParcel from "../src/pages/NewParcel";
import NewUsers from "../src/pages/NewUsers";
import Parcel from "../src/pages/Parcel";
import Login from "../src/pages/Login";

function App() {
  const Layout = () => { 
    return (
      <div className="flex flex-col">
        <Navbar />

        <div className="flex">
          <div className="w-[20%]">
            <Menu />
          </div>

          <div className="w-[80%]">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/parcels",
          element: <Parcels />,
        },
        
        {
          path: "/users",
          element: <Users />,
        },
        
        {
          path: "/newparcel",
          element: <NewParcel />,
        },
        {
          path: "/newuser",
          element: <NewUsers />,
        },
        {
          path: "/parcel/:id",
          element: <Parcel />,
        },
      ],
     
    },
    {
      path: "/login",
      element: <Login />,
    },

  
  ]);

  return <RouterProvider router={router} />;
}

export default App;