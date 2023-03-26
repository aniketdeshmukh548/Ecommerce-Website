

const Movies=(props)=>{
    console.log(props.Productsdata.name)
    return(
        <>
        <table className="table container text-center">
      <thead>
          <tr>
            <th scope="col">Episode Number</th>
            <th scope="col">Movie Name</th>
            <th scope="col">Movie Description</th>
            <th scope="col">Release Date</th>
          </tr>
          <tr>
            <th scope="col">{props.Productsdata.EpisodeNumber}</th>
            <th scope="col">{props.Productsdata.title}</th>
            <th scope="col">{props.Productsdata.opening}</th>
            <th scope="col">{props.Productsdata.releaseDate}</th>
          </tr>
        </thead>
        </table>
        </>
    )
}

export default Movies;