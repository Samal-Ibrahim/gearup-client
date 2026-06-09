import { Route, Routes } from "react-router"
import About from "../pages/About"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import ViewCarPage from "../pages/viewCar/ViewCarPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/car/:id" element={<ViewCarPage />} />
    </Routes>
  )
}

export default AppRoutes
