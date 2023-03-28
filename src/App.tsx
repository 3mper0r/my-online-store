import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SingleHoodie from "./pages/SingleHoodie"
import Hoodies from "./pages/Hoodies"
import Tanks from "./pages/Tanks"

import './styles/styles.css'

const Root = () => {
  return (
    <>
      <Navbar/>

      <div>
        <Outlet/>
      </div>
    </>
  )
}


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/hoodies" element={<Hoodies hoodies={[]} />}/>
        <Route path="/hoodies/:id/" element={<SingleHoodie/>}/>
        <Route path="/top-tanks" element={<Tanks/>}/>
      </Route> 
     
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
      <div className="App">    
          
      </div>
    </>
  )
}

export default App