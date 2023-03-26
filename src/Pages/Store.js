import Footer from "../Components/Footer/Footer";
import Header from "../Components/NavBar/header";
import React,{useCallback, useEffect, useState} from "react";
import Movies from "../Components/Products/Movies";
import Productsdata from "../Components/Products/products";
import AddMovie from "../Components/Products/AddMovie";


const Storepage=(props)=>{
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    
   const FetchMoviesHandler =useCallback(async ()=>{
        setIsLoading(true)
        setError(null)
        try{
            const response= await fetch('https://react-ecommerce-b1f5c-default-rtdb.firebaseio.com/movies.json')
            if (!response.ok){
                throw new Error('Something Went Wrong !')
              }
      const data=await response.json()
      const loadedMovies=[]
      for(const key in data){
        loadedMovies.push({
            id:key,
            EpisodeNumber:data[key].EpisodeNumber,
            title:data[key].title,
            opening:data[key].openingText,
            releaseDate:data[key].releaseDate
        })
      }
            // const transformedMovies=data.map(movieData=>{
            //     return {
            //         id:movieData.episode_id,
            //         title:movieData.title,
            //         opening:movieData.opening_crawl,
            //         releaseDate:movieData.release_date
            //     }
            // })
            setMovies(loadedMovies)
            //setIsLoading(false)
        }
        catch(error){
            setError(error.message)
            
        }
        setIsLoading(false)
    },[])
    useEffect(()=>{
        FetchMoviesHandler()
    },[FetchMoviesHandler])

    async function addMovieHandler(movie) {
        const response= await fetch('https://react-ecommerce-b1f5c-default-rtdb.firebaseio.com/movies.json',{
            method:'POST',
            body:JSON.stringify(movie),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data=await response.json();
        console.log(data)
      }

    const datamovies=movies.map((item)=>{
        return(

            <Movies Productsdata={item} key={item.id} />
        )
    })

    let Content=<p class="text-center font-weight-bold" >Found No Movies</p>
    if(datamovies.length>0){
        Content=datamovies
    }
    if(error){
        Content=<p>{error}</p>
    }
    if(isLoading){
        Content=<p>Loading...</p>
    }

    return(
        <>
        <Header />
        <Productsdata />
        {/* {!isLoading && datamovies.length>0 && datamovies}
        {!isLoading && datamovies.length===0 && !error && <p>Found No Movies..</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>} */}
        <AddMovie onAddMovie={addMovieHandler} />
        <section>{Content}</section>
        <div class="text-center bg-success">
        <button type="button" class="btn btn-danger"size="lg" font-size="16px" onClick={FetchMoviesHandler} >
          Fetch Movies
        </button>
</div>
        <Footer />
        </>
    )
}

export default Storepage;