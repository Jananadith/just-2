import { useState } from 'react';
import arrow from './Images/arrow.png';

const Home = () => {
  
  const [name , setName] = useState ("");
  const [lastName , setLastName] = useState ("");
  const [age , setAge] = useState ("");
  const [city , setCity] = useState ("");
  const [des , setDes] = useState ("");
  const [url , setUrl] = useState ("");
  
  function nameChange(event) {
    setName(event.target.value);
  }

  function changeLastName(event) {
    setLastName(event.target.value);
  }

  function ageChange(event) {
   setAge(event.target.value); 
  }
  
    return (
    <>
      <div className='h-screen w-full flex flex-col items-center justify-center bg-[#29333f] gap-3'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold text-white m-5'>Profile</h1>
          <p className='text-[18px] w-[90%] m-auto my-3 text-gray-500'>Enter Your Details For See How Your Profile Looks Like.</p>
        </div>
        <div className='flex flex-col text-center m-3 w-full justify-center items-center'>
          <input type="text" placeholder='First Name' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none'
            onChange={nameChange}
          />
          <input type="text" placeholder='Last Name' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none' 
            onChange={changeLastName}
          />
          <input type="text" placeholder='Age' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none' 
            onChange={ageChange}
          />
          <input type="text" placeholder='City' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none' 
            onChange={(event)=>{
              setCity(event.target.value);
            }}
          />
          <input type="text" placeholder='Description' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none' 
            onChange={(event)=>{
              setDes(event.target.value);
            }}
          />
          <input type="text" placeholder='Image Url' className='w-[80%] text-center p-3 bg-gray-700 m-2 max-w-[500px] text-gray-300 outline-none' 
            onChange={(event)=>{
              setUrl(event.target.value);
            }}
          />
        </div>
        <a href="#second-section">
        <div className='w-12 h-12 bg-transparent m-3 drop-shadow-md hover:bg-slate-500 rounded-full flex items-center justify-center border border-white duration-500'>
          <img src={arrow} alt="icon" className='w-5 '/>
        </div>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center h-screen bg-[#29333f]' id='second-section'>
      <div className='w-60 h-60 rounded-full overflow-hidden m-5 flex items-center justify-center animate-pulse'>
        <img src={url} alt="profile" className='m-auto w-full' />
      </div>
      <div className='text-center text-white'>
        <h1 className='text-3xl m-2'>{name+" "+lastName}</h1>
        <p>{age} Years Old</p>
        <p className='text-2xl tracking-widest m-3'>{city}</p>
        <p className='max-w-[500px] w-[80%] m-auto mb-20 text-gray-500'>{des}</p>
      </div>
    </div>
    </>
  )
}

export default Home