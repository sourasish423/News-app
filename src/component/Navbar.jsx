import React, { useState } from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext';

const Navbar = ({className}) => {

  const[searchValue,setSearchvalue]=useState('');
  const{setNews,fetchNews}=useNewsContext();

  let timer=null;
  const searchNews=async(e)=>{
    const searchValue=e.target.value;//e is the event target is the button and value is value of the button
        if(!searchValue) return;
        clearTimeout(timer);

        timer=setTimeout(async() => {
          const data= await fetchNews(`/everything?q= ${searchValue}`)
        setNews(data.articles);
        }, 1000);
    
  }


  return (
    <div className={`bg-base-200 ${className}`}>
    <Wrapper>
        <div className="navbar shadow-sm">

  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MKL News</a>
  </div>
  
  <div className="flex gap-2">
    <input onChange={searchNews}
    type="text" placeholder="Search" 
    className="input input-bordered w-24 md:w-auto" />
  </div>

</div>
    </Wrapper>
    </div>
   

  )
}

export default Navbar