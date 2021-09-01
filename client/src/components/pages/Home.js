import React, { useState, useEffect } from 'react';
import Cards from '../Cards';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { useHistory } from "react-router-dom";


const Home = () => {

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
            <div className="introduction">
                <p className="pt-5">Welcome {userName}</p>
                <h4>{userName}{show  ? ' is a MERN Developer' : ' A MERN Dveloper'}</h4>
           </div>
            <HeroSection />
            <Cards />
            <Footer />

        </>
    );
}

export default Home;