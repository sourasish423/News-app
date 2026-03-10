import React from 'react'
import Wrapper from './Wrapper'
import { useNewsContext } from '../context/NewsContext'

const Category = ({className}) => {

        const {setNews,fetchNews}=useNewsContext();


   const categories=['Business','Entertainment',
    'General','Health','Science','Sports']

    const handleClick=async(e)=>{
        const cat=e.target.value;//e is the event target is the button and value is value of the button
        const data= await fetchNews(`?category=${cat}`)
             setNews(data.articles);
        
    }

    return (
<div className={`${className}`}>
        <Wrapper>
            <div className={`max-w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5
               `}>
            {categories.map((category)=>{
                return(
                    <button onClick={handleClick} key ={category}
                    value={category}
                    className="btn btn-primary">
                        {category}</button>
                )
            }
        )}
            </div>
            </Wrapper>
            </div>
            
  )
}

export default Category
