import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'


const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:py-35 px-4 md:pt-32 md:px-16 lg:px-24 xl:px-32'>

            <Title title='My Bookings' subTitle='Easily manage your past,present and future bookings.
        Plan your trips seamlessly with our user-friendly interface' align='left' />
            <div className='max-w-6xl mt-8 w-full text-gray-800'>

                <div className='hidden md:grid md:grid-cols-[3fr_1fr_1fr] w-full border-b border-gray-300
        font-medium text-base py-3'>
                    <div className='w-1/3'>Hotels</div>
                    <div className='w-1/3'>Date & Time</div>
                    <div className='w-1/3'>Payment</div>
                </div>
                {bookings.map((booking) => (
  <div
    key={booking._id}
    className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_1fr] w-full border-b border-gray-300 py-6 first:border-t"
  >
    {/* ---Hotel Details--- */}
    <div className="flex flex-col md:flex-row">
      <img
        src={booking.room.images[0]}
        alt=""
        className="md:w-32 mx-2 rounded shadow object-cover"
      />
      <div className="flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4">
        <p className="font-playfair text-2xl">
          {booking.hotel.name}
          <span className="font-inter text-sm">
            ({booking.room.roomType})
          </span>
        </p>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{booking.hotel.address}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <img src={assets.guestsIcon} alt="guest-icon" />
          <span>Guests: {booking.guests}</span>
        </div>
        <p className="text-base">Total: ${booking.totalPrice}</p>
      </div>
    </div>

    {/* --- Check In --- */}
    <div>
      <p className="font-medium">Check In</p>
      <p className="text-sm text-gray-500">
        {new Date(booking.checkInDate).toDateString()}
      </p>
    </div>

    {/* --- Check Out --- */}
    <div>
      <p className="font-medium">Check Out</p>
      <p className="text-sm text-gray-500">
        {new Date(booking.checkOutDate).toDateString()}
      </p>
    </div>

    {/* ---Payment Details--- */}
    <div className="flex flex-col items-start justify-center">
      <div className="flex items-center gap-2">
        <div
          className={`h-3 w-3 rounded-full ${
            booking.isPaid ? "bg-green-500" : "bg-red-500"
          }`}
        />
        <p
          className={`text-sm ${
            booking.isPaid ? "text-green-500" : "text-red-500"
          }`}
        >
          {booking.isPaid ? "Paid" : "Unpaid"}
        </p>
      </div>
      {!booking.isPaid && (
        <button className="px-4 py-1.5 text-xs font-medium border border-gray-400 rounded-full
         hover:bg-gray-50 transition-all cursor-pointer mt-4">
          Pay Now
        </button>
      )}
    </div>
  </div>
))}


            </div>
        </div>



    )
}

export default MyBookings