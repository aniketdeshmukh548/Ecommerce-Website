import { Fragment } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/NavBar/header";
import Productsdata from "../Components/Products/products";



function Homepage(){
    return(
        <Fragment>
        <Header />
      <Productsdata />
      <Footer />
      </Fragment>
    )
}

export default Homepage;