import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../App.css';
import { Button } from './Button/GetStart';

import { Button1 } from './Button/WatchTrailer';
import './HeroSection.css';

function HeroSection() {
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



    
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    // const show: true;

    const history = useHistory();

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    Accept:"application/json",
                    "Content-Type": "application/json"

                },
                credentials:"include"

            }); //from auth.js in 153 line


            const data = await res.json();
            console.log(data);
            setUserName(data.name);
            setShow(true);

            
            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }

        } catch (err) {
            console.log(err);
            history.push('/');
        }

    }



    useEffect(() => {

        userHomePage();
    }, []);


    return (
      <>
        <div className='hero-container'>

            <video src='https://media.istockphoto.com/videos/landscape-of-clear-stream-video-id699620004' autoPlay loop muted />
            <h1>Adventure Starts</h1>
            <h3>Happy to see you back</h3>
            <h3>What are u waiting for {userName}?</h3>
            
            <div className="hero-btns">
             
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

export default HeroSection
