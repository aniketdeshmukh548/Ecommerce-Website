import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/NavBar/header";
import Table from "react-bootstrap/Table";
const Homepage = () => {
  return (
    <div>
      <Header />
      <div class="text-center bg-secondary">
        <button type="button" class="btn btn-warning"size="lg" font-size="16px" >
          Get our Latest Album
        </button>
      </div><span></span>
      <div className="text-center bg-secondary" >
        <button type="button" class="btn btn-danger btn-lg btn-floating">►
        <i class="fas fa-apple"></i>
        </button>
      </div>
      <section>
        <h2 className="bg-success text-warning p-2 mt-2 mb-2 text-center">
          Tours
        </h2>
        <Table className="text-center">
          <thead></thead>
          <tbody>
            <tr>
              <td>JUL16</td>
              <td>DETROIT, MI</td>
              <td>DTE ENERGY MUSIC THEATRE</td>
              <td>
                <button type="button" class="btn btn-primary">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL19</td>
              <td>TORONTO ,ON</td>
              <td>BUDWEISER STAGE</td>
              <td>
                <button type="button" class="btn btn-primary">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL22</td>
              <td>DELHI, MI</td>
              <td>JIGGY LUBE LIVE</td>
              <td>
                <button type="button" class="btn btn-primary">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            <tr>
              <td>JUL29</td>
              <td>MUMBAI, MI</td>
              <td>T-MOBILE ARENA</td>
              <td>
                <button type="button" class="btn btn-primary">
                  BUY TICKETS
                </button>
              </td>
            </tr>
            
          </tbody>
        </Table>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
