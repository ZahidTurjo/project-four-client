/* eslint-disable react/prop-types */


const Header = ({ rooms }) => {
  return (
    <>
     
      <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
        <img
          className='object-cover w-full'
          src={rooms.image}
          alt='header image'
        />
      </div>
    </>
  )
}

export default Header