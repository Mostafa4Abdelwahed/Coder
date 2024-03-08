import { BrowserRouter, Route, Routes } from "react-router-dom"
import Error from "./error"
import Home from "./Pages/Home/home"
import Login from "./Pages/Auth/Login/login"
import Register from "./Pages/Auth/Register/register"
import Layout from "./Pages/Layout/layout"
import RestPass from "./Pages/Auth/ResetPass/resetPass"
import ChangePass from "./Pages/Auth/ResetPass/changePass"
import LayoutDash from "./dashboard/Layout/layout"
import HomeDash from "./dashboard/Home/home"
import CoursesDash from "./dashboard/Courses/courses"
import TeamDash from "./dashboard/Team/team"
import OrdersDash from "./dashboard/Orders/orders"
import UsersDash from "./dashboard/Users/users"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="dashboard" element={<LayoutDash />}>
          <Route index element={<HomeDash />} />
          <Route path="courses" element={<CoursesDash />} />
          <Route path="team" element={<TeamDash />} />
          <Route path="orders" element={<OrdersDash />} />
          <Route path="users" element={<UsersDash />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<RestPass />} />
          <Route path="/change-password" element={<ChangePass />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
