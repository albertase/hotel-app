import React from 'react'
import { FaFacebookSquare,FaLinkedin, FaTwitter } from 'react-icons/fa';
// import {IoLogoYoutube} from 'react-icons/io';
// import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-dark-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto">
                        <small>Copyright &copy; Albert Ukaegbu</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://web.facebook.com/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/in/ukaegbu-albert-86b221208/">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://twitter.com/UkaegbuAlbert">
                                <FaTwitter className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer