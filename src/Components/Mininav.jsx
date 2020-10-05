import React, { Component } from "react";
import {MDBNavbar,} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Mininav extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
      <MDBNavbar color="brown" dark expand="md"></MDBNavbar>
      {/* <nav class="navbar navbar-expand-lg navbar-dark blue lighten-2 mb-4">

  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <form class="form-inline mr-auto">
      <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-mdb-color btn-rounded btn-sm my-0 ml-sm-2" type="submit">Search</button>
    </form>

  </div>
  
  <a class="navbar-brand" href="#">Navbar</a>

</nav> */}
      </>
    );
  }
}

export default Mininav;
