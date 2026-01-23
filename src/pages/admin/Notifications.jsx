import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import { Bell, User, DollarSign, AlertCircle, CheckCircle } from 'lucide-react'

export const Notifications = () => {
  const { theme } = useTheme()

  const notifications = [
    {
      id: 1,
      icon: User,
      title: 'New User Registration',
      message: 'John Smith has registered as a new user',
      time: '5 minutes ago',
      type: 'info',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 2,
      icon: DollarSign,
      title: 'Payment Received',
      message: 'Payment of £150 received from Sarah Johnson',
      time: '1 hour ago',
      type: 'success',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 3,
      icon: AlertCircle,
      title: 'System Alert',
      message: 'Server maintenance scheduled for tonight',
      time: '3 hours ago',
      type: 'warning',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      id: 4,
      icon: CheckCircle,
      title: 'Report Generated',
      message: 'Monthly analytics report is ready to view',
      time: '5 hours ago',
      type: 'success',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      id: 5,
      icon: User,
      title: 'User Update',
      message: 'Mike Davis updated their profile information',
      time: '1 day ago',
      type: 'info',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      id: 6,
      icon: DollarSign,
      title: 'New Subscription',
      message: 'Emily Brown subscribed to Premium Plan',
      time: '2 days ago',
      type: 'success',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ]

  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className={`max-w-4xl mx-auto ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <Bell className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
          <h1 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Notifications
          </h1>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon
            return (
              <div
                key={notification.id}
                className={`flex gap-4 p-4 rounded-lg border transition-colors hover:shadow-md ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 hover:bg-gray-650'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full ${notification.iconBg} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${notification.iconColor}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {notification.title}
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {notification.message}
                  </p>
                  <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {notification.time}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State (hidden when there are notifications) */}
        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className={`w-16 h-16 mx-auto mb-4 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-300'}`} />
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              No notifications yet
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
