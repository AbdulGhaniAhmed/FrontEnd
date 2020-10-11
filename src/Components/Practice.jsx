import React from "react";
import "./Practice.css";
import {MDBIcon,MDBContainer,MDBRow,MDBCol,MDBJumbotron,MDBInput,MDBInputGroup,MDBCardText,MDBBtn,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Practice(props) {

  return (
    <>
          <MDBJumbotron fluid className="front" style={{ height: '33rem'}}>
          <MDBRow center style={{ paddingTop: '12rem' }}>
             <h3 style={{color:'white', fontWeight:'bolder'}}>Choose yoour destination</h3>
            </MDBRow>
            <MDBRow center style={{ paddingTop: '1rem' }}>
              <MDBCol size='6'>
            <MDBInputGroup
          containerClassName="mb-3"
          // append={
          //   // <MDBBtn
          //   //   color="elegant"
          //   //   outline
          //   //   className="m-0 px-3 py-2 z-depth-0"
          //   // >
          //   //   BUTTON
          //   // </MDBBtn>
          //   // <MDBIcon fab icon="mdb" />
          // }
          inputs={
            <select className="browser-default custom-select" style={{color:'#a1887f'}}>
              <option value="0">Choose Your Venue</option>
              <option value="1">Marriage Halls</option>
              <option value="2">Marquee</option>
              <option value="3">DJ's</option>
              <option value="3">Parlor</option>
            </select>
          }
        />
        </MDBCol>
            </MDBRow>  
          </MDBJumbotron>

      {/* <div class="container-fluid" className="front">
        <div class="row d-flex justify-content-center">
          <div class="active-pink-3 active-pink-4 col-7">
            <input
              class="form-control"
              type="text"
              placeholder="Find Your vendors from Lahore"
              aria-label="Search"
            />

        </div>
      </div>
      </div> */}
    </>
  );
}
export default Practice;
