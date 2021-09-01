import React from 'react';
import '../../../App';
import '../../Cards';
import CardItem from '../../CardItem';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
//import Navbar from '../../Navbar';



function cardb() {
    return (
        <>
            
            <div className='cards'>
                <h1>Adventures To The Islands!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                            <CardItem
                                src='https://images.pexels.com/photos/2310835/pexels-photo-2310835.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Scenic Island'
                                label='Cost-5000/-'
                                path='/cardb'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/380169/pexels-photo-380169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Private Cruise Ship for more than 1000 peoples'
                                label='Cost-8000/-'
                                path='/cardb'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/327337/pexels-photo-327337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Fishing and exploring can be done using raw boat'
                                label='Cost-12000/-'
                                path='/cardb'
                            />
                        </ul>


                        <ul className='cards__items'>
                            <CardItem
                                src='https://images.pexels.com/photos/2907196/pexels-photo-2907196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Book a Resort for adventure activities'
                                label='Cost 12000/-'
                                path='/cardb'
                            />
                            <CardItem
                                src='https://media.istockphoto.com/photos/family-enjoys-a-guided-exploration-of-the-amazon-jungle-on-a-remote-picture-id871012998?s=612x612'
                                text='Experience Bungle in the Jungle fun'
                                label='Cost 3000/-'
                                path='/cardb'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/6965514/pexels-photo-6965514.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='A Maze Challenge which will remid your childhood'
                                label='Cost-5000/-'
                                path='/cardb'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className='footer-container'>
                <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                        Join the Adventure newsletter to receive our best vacation deals
                    </p>
                    {/*<p className='footer-subscription-text'>
                        You can unsubscribe at any time.
                    </p>
                    <div className='input-areas'>
                        <form>
                            <input
                                className='footer-input'
                                name='email'
                                type='email'
                                placeholder='Your Email'
                            />
                            <Button buttonStyle='btn--outline'>Subscribe</Button>
                        </form>
    </div>*/}
                </section>
                <div class='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>About Us</h2>
                            <Link to='/sign-up'>How it works</Link>
                            <Link to='/'>Testimonials</Link>
                            <Link to='/'>Careers</Link>
                            <Link to='/'>Investors</Link>
                            <Link to='/'>Terms of Service</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Contact Us</h2>
                            <Link to='/'>Contact</Link>
                            <Link to='/'>Support</Link>
                            <Link to='/'>Destinations</Link>
                            <Link to='/'>Sponsorships</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section class='social-media'>
                    <div class='social-media-wrap'>
                        <div class='footer-logo'>
                            <Link to='/' className='social-logo'>
                                FinalTour
                                <i class='fab fa-foursquare' />
                            </Link>
                        </div>
                        <small class='website-rights'>FinalTour © 2021</small>
                        <div class='social-icons'>
                            <Link
                                class='social-icon-link facebook'
                                to='/'
                                target='_blank'
                                aria-label='Facebook'
                            >
                                <i class='fab fa-facebook-f' />
                            </Link>
                            <Link
                                class='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i class='fab fa-instagram' />
                            </Link>
                            <Link
                                class='social-icon-link youtube'
                                to='/'
                                target='_blank'
                                aria-label='Youtube'
                            >
                                <i class='fab fa-youtube' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='Twitter'
                            >
                                <i class='fab fa-twitter' />
                            </Link>
                            <Link
                                class='social-icon-link twitter'
                                to='/'
                                target='_blank'
                                aria-label='LinkedIn'
                            >
                                <i class='fab fa-linkedin' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default cardb;