import { Link, useParams } from "react-router-dom";


const ProdDetail=()=>{
    const params=useParams();
    
    return(
        <>
        <h2>Products Details!!</h2>
        <p>{params.prodID}</p>
        <p><Link to='..' relative="path">Back</Link></p>
        </>
    )
}

export default ProdDetail;