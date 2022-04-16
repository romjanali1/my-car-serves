import React from 'react';
import logo from '../../photos/logo.png';

const Footer = () => {
    return (
        <div  className='row text-white bg-dark p-5'>
           <div className='col-6'> <img className='w-50' src={logo} alt="" /></div>
            <div className='col-3'>
                <p>About Online Food</p>
                <p>Read Our blog</p>
                <p>Sign up deliver</p>
                <p>Add your restaurant</p>
            </div>
            <div className='col-3'>
                <p>Get help</p>
                <p>Read FAQs</p>
                <p>View all cities</p>
                <p>Restaurants near me</p>
            </div>
            <div className='row'>
                <div className='col-6'><p>Copyright @ 2020 Online Food</p></div>
                <div className='col-6 d-flex'>
                <p className='px-5'>Privacy Policy</p>
                <p className='px-5'>Terms of Use</p>
                <p className='px-5'>Pricing</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;