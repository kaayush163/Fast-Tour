import React from 'react';
import '../../../App';
import '../../Cards';
import CardItem from '../../CardItem';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
//import Navbar from '../../Navbar';



function cardc() {
    return (
        <>
            
            <div className='cards'>
                <h1>Sail Across The Sea!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                    <ul className='cards__items'>
                            <CardItem
                                src='https://images.pexels.com/photos/327412/pexels-photo-327412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                text='Sail with 100 of Groups'
                                label='Cost-5000/-'
                                path='/cardc'
                            />
                            <CardItem
                                src='https://media.gettyimages.com/photos/rafting-strbacki-buk-waterfall-in-una-river-picture-id1165163864?s=2048x2048'
                                text='Group Boating in Salto Angel Waterfall, Venezuela'
                                label='Cost-8000/-'
                                path='/cardc'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/4319752/pexels-photo-4319752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Enjoy The Best Surfing Rides'
                                label='Cost-12000/-'
                                path='/cardc'
                            />
                        </ul>


                        <ul className='cards__items'>
                            <CardItem
                                src='https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Learn Scuba Diving And Explore Beneath The Ocean'
                                label='Cost 12000/-'
                                path='/cardc'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/4910964/pexels-photo-4910964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Part Fun During Sailing Time'
                                label='Cost 3000/-'
                                path='/cardc'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/8098432/pexels-photo-8098432.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                                text='Feel A Beautiful Experience with Sunsets Scene'
                                label='Cost-5000/-'
                                path='/cardc'
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

export default cardc;