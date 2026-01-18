import React, { useState } from 'react'
import { Users, Zap, CreditCard, DollarSign } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from '@/context/ThemeContext'

export const Dashboard = () => {
  const { theme } = useTheme()
  const [selectedFilter, setSelectedFilter] = useState('30 Day')

  // Chart data
  const chartData = [
    { date: 'May 1', activeUser: 50, newUser: 50 },
    { date: 'May 5', activeUser: 200, newUser: 180 },
    { date: 'May 10', activeUser: 510, newUser: 380 },
    { date: 'May 15', activeUser: 650, newUser: 520 },
    { date: 'May 20', activeUser: 750, newUser: 600 },
    { date: 'May 25', activeUser: 850, newUser: 720 },
    { date: 'May 30', activeUser: 950, newUser: 920 },
  ]

  const statsData = [
    {
      id: 1,
      icon: Users,
      value: '1,234',
      label: 'Total User',
      bgColor: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-600'
    },
    {
      id: 2,
      icon: Zap,
      value: '80',
      label: 'Active Today',
      bgColor: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-transparent'
    },
    {
      id: 3,
      icon: CreditCard,
      value: '1205',
      label: 'Credits Used',
      bgColor: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-transparent'
    },
    {
      id: 4,
      icon: DollarSign,
      value: '$11,500',
      label: 'Total Revenue',
      bgColor: theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100',
      iconColor: 'text-blue-600',
      borderColor: 'border-transparent'
    }
  ]

  return (
    <div className='p-4 sm:p-6'>
      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
        {statsData.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.id}
              className={`${stat.bgColor}  border-2 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center transition-all hover:shadow-lg`}
            >
              {/* Icon */}
              <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-full p-3 mb-4`}>
                <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`} />
              </div>
              
              {/* Value */}
              <h2 className={`text-2xl sm:text-3xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-2`}>
                {stat.value}
              </h2>
              
              {/* Label */}
              <p className={`${stat.iconColor} text-xs sm:text-sm font-semibold`}>
                {stat.label}
              </p>
            </div>
          )
        })}
      </div>

      {/* User Growth Timeline Chart */}
      <div className={`mt-6 md:mt-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-4 sm:p-6 shadow-sm`}>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6 gap-4'>
          <div>
            <h2 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-gray-100' : 'text-gray-900'} mb-1`}>
              User Growth Timeline
            </h2>
            <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              Real-time tracking registration vs activity
            </p>
          </div>

          {/* Filter Buttons */}
          <div className='flex gap-2 flex-wrap'>
            {['7 Day', '30 Day', '90 Day'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className='flex items-center justify-center sm:justify-end gap-4 sm:gap-6 mb-4 flex-wrap'>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-green-500'></div>
            <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Active user</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full bg-blue-500'></div>
            <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>New user</span>
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width='100%' height={300} className='sm:h-[400px]'>
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid 
              strokeDasharray='3 3' 
              stroke={theme === 'dark' ? '#374151' : '#f0f0f0'} 
            />
            <XAxis 
              dataKey='date' 
              tick={{ fill: theme === 'dark' ? '#9ca3af' : '#666', fontSize: 11 }}
              axisLine={{ stroke: theme === 'dark' ? '#4b5563' : '#e0e0e0' }}
            />
            <YAxis 
              tick={{ fill: theme === 'dark' ? '#9ca3af' : '#666', fontSize: 11 }}
              axisLine={{ stroke: theme === 'dark' ? '#4b5563' : '#e0e0e0' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: theme === 'dark' ? '#1f2937' : '#fff',
                border: theme === 'dark' ? '1px solid #374151' : '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '10px',
                color: theme === 'dark' ? '#f3f4f6' : '#000'
              }}
            />
            <Area 
              type='monotone' 
              dataKey='activeUser' 
              stroke='#22c55e' 
              fill='#22c55e20' 
              strokeWidth={2}
              dot={{ fill: '#22c55e', r: 3 }}
            />
            <Area 
              type='monotone' 
              dataKey='newUser' 
              stroke='#3b82f6' 
              fill='#3b82f620' 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 3 }}
              strokeDasharray='5 5'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
