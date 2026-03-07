//Create context
//provide
//use context
import { useContext,useState } from "react";
import { createContext } from "react";
import api from "../config/axios";

const NewsContext=createContext();

const NewsContextProvider=({children})=>{//this value can be used in any component as its a global state
    
    const [news,setNews]=useState([]);
//as we have to fetch api mulitple times in different compn so we are fetching here 


    const fetchNews=async(url="/everything?q=india")=>{
       try{
        const response=await api.get(`${url}&apiKey=${import.meta.env.VITE_API_KEY}`)
      return response.data;
       } 
       catch(error){
                console.log(error)
       }
    }



    const value={
        news,
        setNews,
        fetchNews//the values which are here can be used by other components
    }

    return(
        <NewsContext.Provider value={value}>
            {children}
        </NewsContext.Provider>
    )
}


const useNewsContext=()=>{
    return useContext(NewsContext);
}

export {NewsContextProvider,useNewsContext}