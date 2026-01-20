import React from 'react'
import { Bell, User } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const AdminTopbar = () => {
  const navigate = useNavigate()

  return (
    <div className='flex items-center justify-between h-16 px-6 bg-[#0A2463] shadow-md'>
      
      {/* Welcome Message */}
      <h1 className='ml-10 text-xl font-semibold text-whit'>
        Welcome Back, FmSolve
      </h1>

      {/* Right Side Icons */}
      <div className='flex items-center gap-4'>
        {/* User Profile Icon */}
        <button 
          onClick={() => navigate('/admin/profile')}
          className='relative p-2 transition-colors bg-white rounded-full hover:bg-gray-100'
        >
          <User className='w-5 h-5 text-[#0A2463]' />
        </button>

        {/* Notification Icon */}
        <button 
          onClick={() => navigate('/admin/notifications')}
          className='relative p-2 transition-colors bg-white rounded-full hover:bg-gray-100'
        >
          <Bell className='w-5 h-5 text-[#0A2463]' />
        </button>
      </div>
    </div>
  )
}

export default AdminTopbar
