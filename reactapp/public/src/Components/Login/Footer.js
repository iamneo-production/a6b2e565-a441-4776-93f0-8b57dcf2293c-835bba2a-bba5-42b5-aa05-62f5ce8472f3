import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="footer bg-danger">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="information">
            <Link to="/about" style={{textDecoration:"none"}}>
            <h6 className="footer-heading text-uppercase text-white fw-bold">Information</h6>
            </Link>

            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-4 col-lg-3 text-center text-sm-start">
            <div className="resources">
              <h6 className="footer-heading text-uppercase text-white fw-bold">Resources</h6>
              <ul className="list-unstyled footer-link mt-4">
              <Link to="/about" style={{textDecoration:"none"}}>
              <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">About</a></li>
              </Link>
              <Link to="/contact"style={{textDecoration:"none"}}>
              <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">Feedback</a></li>
              </Link>
              <Link to="/privacy"style={{textDecoration:"none"}}>
              <li className="mb-1"><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">PrivacyPolicy</a></li>
              </Link>
              <Link to="/faq"style={{textDecoration:"none"}}>
              <li className=""><a href="https://codepen.io/Gaurav-Rana-the-reactor" className="text-white text-decoration-none fw-semibold">FAQ</a></li>
              </Link>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 mt-4 col-lg-2 text-center text-sm-start">
            <div className="social">
              <h6 className="footer-heading text-uppercase text-white fw-bold">Social</h6>
              <ul className="list-inline my-4">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/" className="text-white btn-sm btn btn-primary mb-2">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.instagram.com/" className="text-danger btn-sm btn btn-light mb-2">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/" className="text-white btn-sm btn btn-primary mb-2">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.whatsapp.com/" className="text-white btn-sm btn btn-success mb-2">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 mt-4 col-lg-4 text-center text-sm-start">
            <div className="contact">
              <h6 className="footer-heading text-uppercase text-white fw-bold">Contact Us</h6>
              <address className="mt-4 m-0 text-white mb-1"><i className="bi bi-pin-map fw-semibold"></i> Anna Nagar Cross , DoorNo 68 , 636806</address>
              <a href="tel:+" className="text-white mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-telephone"></i>  9986797878</a>
              <a href="mailto:" className="text-white mb-1 text-decoration-none d-block fw-semibold"><i className="bi bi-envelope"></i> foodofferings@gmail.com</a>
              <a href="" className="text-white text-decoration-none fw-semibold"><i className="bi bi-skype"></i> </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-dark text-white mt-4 p-1">
        <p className="mb-0 fw-bold">2023 © Food Offerings, All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
