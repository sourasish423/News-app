import React, { useEffect } from 'react'
import Wrapper from '../component/Wrapper'
import axios from 'axios'
import { useNewsContext } from '../context/NewsContext'
import Loader from '../component/Loader'


const News = ({className}) => {

    const {news,setNews,fetchNews,loading}=useNewsContext();

    //console.log(news)//first its empty array after calling the api it changes to data.articles
    

    

      useEffect(()=>{

            (async ()=>{const data= await fetchNews()
             setNews(data?.articles || [])}
            )()//immediately invoked function

      },[])

      const uniqueNews=news.filter((article,index,self)=>
              index===self.findIndex((a)=>a.description===article.description));
             

      if(loading) return <Loader className={"w-fit m-auto py-24 mb-32"}/>

      return (
          <Wrapper>
              <div className={`grid grid-cols-4 gap-6 ${className}`}>
                {uniqueNews.map((newsDetails,index)=>{
                  if(!newsDetails.urlToImage)
                    return null;
                      return(
                         <NewsCard key={newsDetails.url}
                         details={newsDetails}/>
                      )
                })}
                
                </div>
          </Wrapper>
        
      )
    }
    const NewsCard=({details})=>{
      return(
      <div className="card bg-base-300  shadow-sm">
      
      <figure>
        <img
        className='w-full aspect-video object-contain'
          src={details?.urlToImage}
          alt="Shoes" />
      </figure>

      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className='line-clamp-3'>{details.description}</p>
        <div className="card-actions justify-end mt-4">
          <button onClick={()=>window.open(details.url)} className="badge-outline btn">Read More</button>
        </div>
      </div>
    </div>
    )
      
    }
    export default News