import React from 'react';
import '../../../App';
//import Footer from '../../Footer';
import '../../TrailerSection';
import { Link } from 'react-router-dom';



export default function WatchTrailer() {
  return (
    <>
      <h1 className="watchtrailer">Enjoy The Trailer</h1>
      <div className='trailer-container'>

        <video src='https://www.flexclip.com/res/preview/720p/trip-planning.mp4?t=1630314800287' autoPlay loop muted />
        <div className="hero-btns">


        </div>

      </div>

    


    </>
  );
}


