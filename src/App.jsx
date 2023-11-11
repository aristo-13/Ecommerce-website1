import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Main from "./pages/Main"
import Layout from "./pages/Layout"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import ProtectiveRoute from "./components/ProtectiveRoute"


function App() {
 const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" element={<Layout />}>
         <Route path="/" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />}/>
         <Route path="/main" element={<ProtectiveRoute><Main /></ProtectiveRoute>}>
           
         </Route>
     </Route>
  )
 )




  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
