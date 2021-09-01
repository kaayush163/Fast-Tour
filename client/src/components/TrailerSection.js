import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button/GetStart';

import { Button1 } from './Button/WatchTrailer';
import './TrailerSection.css';

function TrailerSection() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

    useEffect(() => {
        showButton();
    }, []);
    
    window.addEventListener('resize', showButton);

    return (
      <>
        <div className='trailer-container'>

            <video src='https://media.istockphoto.com/videos/landscape-of-clear-stream-video-id699620004' autoPlay loop muted />
            <h1>Adventure Starts</h1>
            <p>What are u waiting for?</p>
            <div className="trailer-btns">
             
                <Button 
                 className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                    Get Started
                </Button>
             

                
                <Button1 
                 className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                >
                    Watch Trailer<i className='far fa-play-circle' />
                </Button1>
            </div>
            
        </div>
      </>
    );
}

export default TrailerSection
