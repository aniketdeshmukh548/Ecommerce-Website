import Footer from "../Components/Footer/Footer";
import Header from "../Components/NavBar/header";
import React,{useState} from "react";
import Movies from "../Components/Products/Movies";
import Productsdata from "../Components/Products/products";
import { Button } from "react-bootstrap";


const Storepage=(props)=>{
    const [movies,setMovies]=useState([])
    const [isLoading,setIsLoading]=useState(false)
   async function FetchMoviesHandler(){
        setIsLoading(true)
      const response= await fetch('https://swapi.dev/api/films')
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
    console.log(movies)
    const datamovies=movies.map((item)=>{
        return(

            <Movies Productsdata={item} key={item.id} />
        )
    })

    return(
        <>
        <Header />
        <Productsdata />
        {!isLoading && datamovies.length>0 && datamovies}
        {!isLoading && datamovies.length===0 && <p>Found No Movies..</p>}
        {isLoading && <p>Loading...</p>}
        <div class="text-center">
  <Button type="button" class="btn btn-primary" onClick={FetchMoviesHandler}>Fetch Movies</Button>
</div>
        <Footer />
        </>
    )
}

export default Storepage;