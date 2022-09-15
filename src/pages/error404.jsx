import React from 'react';
//css
import './error404.css';
import { Link } from 'react-router-dom';
import Button from '../components/button/button';

export default function NoFound() {
  return(
    <div className='error'>
      <h1 className='errorText'>404 - Mistake!</h1>
        <Link to="/home"  >
          <Button className={"btnBack"} text={"Back Home"}></Button>
        </Link>
    </div>
    )
}
