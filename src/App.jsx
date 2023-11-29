import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Main from "./pages/Main"
import Layout from "./pages/Layout"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import ProtectiveRoute from "./components/ProtectiveRoute"
import Home from "./pages/Home"
import NewArrivals from "./pages/AllProducts"

function App() {
  const router = createBrowserRouter([
    {
      /* path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <SignIn />
        },
        {
          path: "signup",
          element: <SignUp />
        }, */
        
          path: "/",
          element: <Main />,
          children: [
            {
              index: true,
              element: <Home />
            },
            {
              path: "products",
              element: <NewArrivals />
            },
            {
              path: "products/:id",
              element: <NewArrivals />
            }
          ]
        }
      
  ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
