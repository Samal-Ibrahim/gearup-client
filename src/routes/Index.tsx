import { Route, Routes } from "react-router"
import About from "../pages/About"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Contact from "../pages/Contact"
import Home from "../pages/Home"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes
