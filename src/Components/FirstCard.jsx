import React from 'react';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <MDBRow style={{paddingLeft:"50px",paddingRight:"50px",paddingTop:"16px"}}>
      <MDBCol style={{ maxWidth: "90rem" }}>
        <MDBCard reverse cascade style={{ backgroundColor:"rgba(121, 85, 72, 0.3)"}}>
        {/* <h5 className="indigo-text text-center"><strong>Photography</strong></h5> */}
          <MDBCardImage cascade style={{ height: '20rem' }} />
          {/* <MDBCardBody cascade className="text-center">
              <p>Hello my first card</p>
            <h5 className="indigo-text"><strong>Photography</strong></h5>
          </MDBCardBody> */}
        </MDBCard>
      </MDBCol>
    </MDBRow>
  )
}

export default CardExample;