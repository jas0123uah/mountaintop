// frontend/src/components/Navigation/index.js
import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";

import './Footer.css';


function Footer({ isLoaded }){


    return (
        <div className="footer-container">
            <h2 className="a1">Source Code Repository</h2>
            <div className="a2">
                <a href="https://github.com/jas0123uah/mountaintop" target="_blank" rel="noreferrer" className="a2">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
            </div>
            <h2 className="a3">Contact Me</h2>
       
            <div className="a4">
                <a href="https://github.com/jas0123uah" target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/jay-spencer-621b44166/" target="_blank" rel="noreferrer" className="linkedin-icon">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="mailto:jas0123@uah.edu" target="_blank" rel="noreferrer"  className="mail-icon">
                    <i className="fas fa-envelope-square fa-2x"></i>
                </a>
            </div>  
        </div>
    )

}


export default Footer;
