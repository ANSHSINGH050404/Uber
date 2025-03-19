import React from 'react'
import { Link } from 'react-router-dom'
import UserLogin from './UserLogin'

const Start = () => {
  return (
    <div>
        <div className='bg-cover  bg-[url(https://img.lovepik.com/png/20231114/traffic-jam-vector-sticker-cartoon_591904_wh860.png)] h-screen w-full  flex justify-between flex-col pt-8 md:bg-[url("https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1380,w_1104/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png ")]' >
            <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-5 px-5'>
                <h2 className='text-2xl font-bold '>Get Started with Uber</h2>
                <Link to='/login' className='flex item-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-4 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start