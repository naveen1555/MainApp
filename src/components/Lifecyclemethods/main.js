import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
    const {count,setCount, countHandler}= props;
     const navigate = useNavigate(); // Hook

    // useEffect(()=>{
    //     console.log('mount')

    //     return()=>{
    //         console.log('unmount')
    //     }
    // },[count])
    // Dependency array: triggers effect on count change
 const handleClick = () => {
    navigate('/'); // Navigate to "/about" route
  };

  return (
    <>
      <button onClick={()=>countHandler()}>Increment</button>
      <button onClick={()=>handleClick()}>redirection</button>

    </>
  )
}

export default Main
