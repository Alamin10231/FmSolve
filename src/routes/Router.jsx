import React from 'react'
// import { Login } from '../pages/auth/Login'
import { Register } from '../pages/auth/Register'
import { BrowserRouter, Route ,Routes} from 'react-router'
import { Home } from '../pages/landing/Home'
import Login from '../pages/auth/Login'
import { ForgetPassword } from '../pages/auth/ForgetPassword'
import { VerifyEmail } from '../pages/auth/VerifyEmail'
import UpdatedPassword from '../pages/auth/UpdatedPassword'
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
            
        </Routes>
    </BrowserRouter>
  )
}
