import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='Logo'>Chat App</span>
      <div className='user'>
          <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1704757107~exp=1704757707~hmac=e6481a31b316647d2c8df8243cb6d1f4b3a9079be49ace287fd7ac9ba34f03d5' alt=''></img>
          <span>John</span>
          <button>Logout</button>
      </div>
    </div>
  )
}
export default Navbar