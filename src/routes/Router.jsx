import React from 'react'
// import { Login } from '../pages/auth/Login'
import { Register } from '../pages/auth/Register'
import { BrowserRouter, Route ,Routes} from 'react-router'
import { Home } from '../pages/landing/Home'
import Login from '../pages/auth/Login'
import { ForgetPassword } from '../pages/auth/ForgetPassword'
import { VerifyEmail } from '../pages/auth/VerifyEmail'
import UpdatedPassword from '../pages/auth/UpdatedPassword'
import { LandingLayout } from '../components/layout/LandingLayout'
import { UserLayout } from '../components/layout/UserLayout'
import { Dashboard } from '../pages/user/Dashboard'
import { Profile } from '../pages/user/Profile'
import { AdminLayout } from '../components/layout/AdminLayout'
import { Analystics } from '../pages/admin/Analystics'
// import { Routes } from 'react-router'

export const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
           {/* public pages  */}
            <Route path='/'element={<Home />}></Route>
            <Route path='/login'element={<Login/>}></Route>
            <Route path='/register'element={<Register/>}></Route>
            <Route path='/forget-password'element={<ForgetPassword/>}></Route>
            <Route path='/verify-email'element={<VerifyEmail/>}></Route>
            <Route path='/updatedpassword'element={<UpdatedPassword/>}></Route>
            


            {/* home landing page */}

            <Route element={<LandingLayout />}>
            <Route path='/' element={<Home />}></Route>
            </Route>

            {/* now it's useradmin layout */}
            <Route element={<UserLayout />}>
            
            <Route path='/dashboard'element={<Dashboard />}></Route>
            <Route path='/profile'element={<Profile />}></Route>
            </Route>

            {/* its for admin */}
            <Route element={<AdminLayout />}>
            <Route path='/admin/dashboard'element={<Dashboard />}></Route>
            <Route path='/admin/analystics'element={<Analystics />}></Route>

            </Route>
        </Routes>
    </BrowserRouter>
  )
}
