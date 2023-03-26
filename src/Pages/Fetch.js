// //import { response } from "express"
// import { useState } from "react";
// import Storepage from "./Store";
// //import Storepage from "./Store";



// function FetchMoviesHandler(){
//     const [movies,setMovies]=useState([])
//     fetch('https://swapi.dev/api/films').then(response=>{
//         return response.json();
//     }).then(data=>{
//         const transformedMovies=data.results.map(movieData=>{
//             return {
//                 id:movieData.episode_id,
//                 title:movieData.title,
//                 opening:movieData.opening_crawl,
//                 releaseDate:movieData.release_date
//             }
//         })
//         setMovies(transformedMovies)
//     })

//     return(
//         <>
//             <button onClick={FetchMoviesHandler} movies={movies}>Fetch</button>
//             <Storepage movies={movies} />
//         </>
//     )
// }
// export default FetchMoviesHandler;