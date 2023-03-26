import Footer from "../Components/Footer/Footer";
import Header from "../Components/NavBar/header";
import React,{useState} from "react";
import Movies from "../Components/Products/Movies";
import Productsdata from "../Components/Products/products";
import { Button } from "react-bootstrap";


const Storepage=(props)=>{
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
   async function FetchMoviesHandler(){
        setIsLoading(true)
        setError(null)
        try{
            const response= await fetch('https://swapi.dev/api/films')
            if (!response.ok){
                throw new Error('Something Went Wrong !')
              }
      const data=await response.json()
            const transformedMovies=data.results.map(movieData=>{
                return {
                    id:movieData.episode_id,
                    title:movieData.title,
                    opening:movieData.opening_crawl,
                    releaseDate:movieData.release_date
                }
            })
            setMovies(transformedMovies)
            setIsLoading(false)
        }
        catch(error){
            setError(error.message)
            
        }
        setIsLoading(false)
    }
    const datamovies=movies.map((item)=>{
        return(

            <Movies Productsdata={item} key={item.id} />
        )
    })

    let Content=<p>Found No Movies</p>
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
        <section>{Content}</section>
        <div class="text-center">
  <Button type="button" class="btn btn-primary" onClick={FetchMoviesHandler}>Fetch Movies</Button>
</div>
        <Footer />
        </>
    )
}

export default Storepage;