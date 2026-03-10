//Create context
//provide
//use context
import { useContext,useState } from "react";
import { createContext } from "react";
import api from "../config/axios";
import Loader from "../component/Loader";

const NewsContext=createContext();

const NewsContextProvider=({children})=>{//this value can be used in any component as its a global state
    
    const [news,setNews]=useState([]);
    const [loading,setLoading]=useState(false);
//as we have to fetch api mulitple times in different compn so we are fetching here 


    const fetchNews=async(url="/everything?q=india")=>{

        setLoading(true);
       try{
        const response=await api.get("/news");
        setLoading(false);
      return response.data;
       } 
       catch(error){
                console.log(error)
                setLoading(false);
                return { articles: [] };
       }
    }



    const value={
        news,
        setNews,
        fetchNews,//the values which are here can be used by other components
        loading,
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