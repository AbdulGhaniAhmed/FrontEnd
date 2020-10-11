import React, { Component } from 'react';
import MDBParallaxWrapper from './MDBParallaxWrapper';


class ParallaxPractice extends Component {
  render() {
    return (
      <>
        <div style={{ height: '60vh' }}></div>
        <MDBParallaxWrapper
          image='https://mdbootstrap.com/img/Photos/Others/img%20%2844%29.jpg'
          speed='0.8'
        />
        <div style={{ height: '60vh' }}></div>
      </>
    );
  }
}

export default ParallaxPractice;