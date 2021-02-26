import React from 'react';
// import logo from '../assets/logo.png';
import logo from '../assets/logo.png';
import '../styles.scss';

export default function src() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <img src={logo} alt="" />
    </div>
  );
}
