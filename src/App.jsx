import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Main from "./pages/Main"
import Layout from "./pages/Layout"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import ProtectiveRoute from "./components/ProtectiveRoute"
import Home from "./pages/Home"
import NewArrivals from "./pages/AllProducts"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="main" element={<ProtectiveRoute><Main /></ProtectiveRoute>}>
         
          <Route index element={<Home />} />
          
          <Route path="products" element={<NewArrivals />} />
          <Route path="products/:id" element={<NewArrivals />} />
          </Route>
      </Route>
    </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
