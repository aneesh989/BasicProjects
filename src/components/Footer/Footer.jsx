import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-blueGray-200 py-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
          <h5 className="text-lg mt-4 text-blueGray-600 text-center">
            Find me on any of these platforms, I will respond ASAP.
          </h5>
          <ul className="mt-6 flex example-2">
            <li className="icon-content">
              <a href="https://github.com/aneesh989" target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-social="github">
                <div className="filled"></div>
                <FaGithub />
              </a>
              <div className="tooltip">GitHub</div>
            </li>
            <li className="icon-content">
              <a href="https://www.linkedin.com/in/aneesh-acharia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-social="linkedin">
                <div className="filled"></div>
                <FaLinkedin />
              </a>
              <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
              <a href="mailto:aneeshacharia@gmail.com" aria-label="Email" data-social="email">
                <div className="filled"></div>
                <FaEnvelope />
              </a>
              <div className="tooltip">Email</div>
            </li>
            <li className="icon-content">
              <a href="tel:+923332513989" aria-label="Phone" data-social="phone">
                <div className="filled"></div>
                <FaPhone />
              </a>
              <div className="tooltip">Phone</div>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="text-center">
          <div className="text-sm text-blueGray-500 font-semibold py-1 bg-gray-800 text-white">
            Copyright © <span id="get-current-year">2023</span> Your Website Name.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
