/* eslint-disable react/prop-types */
const RoomInfo = ({ rooms }) => {
    return (
      <div className='col-span-4 flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
          <div
            className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              '
          >
            <div>Hosted by {rooms?.host?.name}</div>
  
            <img
              className='rounded-full'
              height='30'
              width='30'
              alt='Avatar'
              src={rooms?.host?.image}
            />
          </div>
          <div
            className='
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              '
          >
            <div>{rooms?.guests} guests</div>
            <div>{rooms?.bedrooms} rooms</div>
            <div>{rooms?.bathrooms} bathrooms</div>
          </div>
        </div>
  
        <hr />
        <div
          className='
          text-lg font-light text-neutral-500'
        >
          {rooms.description}
        </div>
        <hr />
      </div>
    )
  }
  
  export default RoomInfo