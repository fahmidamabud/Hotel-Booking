import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'


const RoomDetails = () => {
    const [room, setRoom] = useState()
    const [mainImage, setMainImage] = useState()

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)

        room && setRoom(room)
        room && setMainImage(room.images[0])
    }, [])

    const { id } = useParams()

    return room && (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            {/* room details */}
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}
                    <span className='font-inter text-sm'>({room.roomType})</span>
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white
                   bg-orange-500 rounded-full'>20% OFF</p>
            </div>
            {/* room rating */}
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200 + reviews</p>
            </div>
            {/* Room Address */}
            <div className='flex items-center gap-1 text-gray-500 mt-2'>
                <img src={assets.locationIcon} alt="" />
                <span>{room.hotel.address}</span>
            </div>
            {/* Room Images */}
            <div className='flex flex-col lg:flex-row gap-6 mt-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={mainImage} alt="" className='w-full object-cover rounded-xl shadow-lg' />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((image, index) => (
                        <img onClick={() => setMainImage(image)} key={index} src={image} alt=""
                            className={`w-full rounded-xl shadow-md object-cover cursor-pointer 
                        ${mainImage === image && 'outline-3 outline-orange-500'}`} />
                    ))}
                </div>
            </div>
            {/* Room Highlights */}\
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Experience Luxury Like Never Before</h1>
                    <div className='flex flex-wrap gap-4 items-center mt-3 mb-6'>
                        {room.amenities.map((item, index) =>
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        )}
                    </div>
                </div>
                {/* Room Price */}
                <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>
            </div>
            {/* CheckIn CheckOut form */}
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white 
            shadow-[0px_0px_20px_rgba(0,0,0,0.15)] rounded-xl p-6 mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap gap-4 md:flex-row items-start md:items-center md:gap-10 text-gray-500'>
                    
                    <div className='flex flex-col' >
                     <label htmlFor="CheckIn" className='font-medium'>Check In</label>
                     <input type="date" id="checkInDate" placeholder='Check-In' 
                     className='w-full rounded border border-gray-300 px-3 py-2 outline-none mt-1.5' required />
                    </div>

                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col' >
                     <label htmlFor="CheckOut" className='font-medium'>Check Out</label>
                     <input type="date" id="checkOutDate" placeholder='Check-Out' 
                     className='w-full rounded border border-gray-300 px-3 py-2 outline-none mt-1.5' required />
                    </div>

                  <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col' >
                     <label htmlFor="guests" className='font-medium'>Guests</label>
                     <input type="number" id="guests" placeholder='0' 
                     className='max-w-20 rounded border border-gray-300 px-3 py-2 outline-none mt-1.5' required />
                    </div>
                </div>
                   <button className='bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full
                   max-md:mt-6 md:px-254 py-3 md:py-4 text-base cursor-pointer'>
                    Check Availability</button>
            </form>
            {/* Common Specifications */}
            <div className='mt-20 space-y-4 '> 
                {roomCommonData.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className=' text-gray-500'>{spec.description}</p>
                            </div>
                    </div>
                ))}
            </div>
             <div className='max-w-3xl border-y border-gray-300 py-10 my-15 mt-10 text-gray-500'>
                 <p>
                    Guests will be collected from the front desk on arrival. 
                    Please be advised that check-in and check-out times are subject to change. You get two bedroom comfortable 
                    rooms with a private bathroom.The guests will be allocated in the room of their choice checking availability.
                 </p>
             </div>
             {/* Hosted By */}
             <div className='flex flex-col mt-10 items-start gap-4'>
                <div className='flex gap-4'>
                    <img src={room.hotel.owner.image} alt="" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />
                    <div>
                        <p className='text-lg md:text-xl'>Hosted By {room.hotel.name}</p>
                        <div className='flex items-center mt-1'>
                            <StarRating/>
                            <p className='ml-2'>200+ reviews </p>
                        </div>
                    </div>
                </div>
                   <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>
                    Contact now
                   </button>
             </div>
        </div>
    )
}

export default RoomDetails