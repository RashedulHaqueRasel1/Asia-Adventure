
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import AllTouristsSpot from "../AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../AddTouristsSpot/AddTouristsSpot";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Error from "../../Error/Error";
import Update from "../Update/Update";
import MyList from "../MyList/MyList";
// import Update from "../Update/Update";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/AllTouristsSpot',
        element: <PrivetRoute><AllTouristsSpot></AllTouristsSpot></PrivetRoute>,
        loader: () => fetch('https://asia-adventura-server.vercel.app/spots'),

      },
      {
        path: '/AddTouristsSpot',
        element: <PrivetRoute><AddTouristsSpot></AddTouristsSpot></PrivetRoute>
      }
      ,
      {
        path: '/spotsUpdate/:id',
        element: <PrivetRoute><Update></Update></PrivetRoute>,
        loader: ({params}) => fetch(`https://asia-adventura-server.vercel.app/spots/${params.id}`)
      }
      ,
      {
        path: '/myList',
        element: <PrivetRoute><MyList></MyList></PrivetRoute>,
      }

    ]
  },
]);

export default router;