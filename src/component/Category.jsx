import React from 'react'
import Wrapper from './Wrapper'

const Category = ({className}) => {
   const categories=['Business','Entertainment',
    'General','Health','Science','Sports']

    return (
<div className={`${className}`}>
        <Wrapper>
            <div className={`max-w-fit m-auto flex overflow-x-auto px-4 scrollbar-none gap-5
               `}>
            {categories.map((category)=>{
                return(
                    <button key ={category}
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
