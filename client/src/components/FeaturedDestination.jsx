import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

   const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50ds py-20'>

        <Title title='Featured Destinations' subTitle="Discover our most popular destinations and find the perfect place to stay.
        We offer unparalleled luxury and exceptional service at the world's finest hotels.Start your journey today"/>

        <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
          {roomsDummyData.slice(0,4).map((room,index) => (
            <HotelCard room={room} index={index} key={room._id}/>
          ))}
        </div>

       <button onClick={() => {navigate('/rooms'); scrollTo(0,0)}} 
       className='my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50
      bg-white transition-all cursor-pointer'> View All Destinations</button>

    </div>
  )
}

export default FeaturedDestination