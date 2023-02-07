import React from 'react'
import "./Footer.css"
import JYCLogo from "./Assets/logojyc.svg"
import TMPLogo from "./Assets/logotmp.svg"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='r-footer'>
        <div className='footer-up'>
            <div>
                <img src={JYCLogo} alt="JYC Logo"/>
                JUIT Youth Club (JYC) is the name of enthusiasm, development, consistency and effort.
            </div>
            <div>
                <img src={TMPLogo} alt="TMP Logo"/>
                Managed by Technical Sciences, Movies and Photography club
            </div>
        </div>
        <hr/>
        <div className='follow-us'>
            <b>FOLLOW US</b>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twitter</Link>
            <Link to="/">Linkedin</Link>
        </div>
        <hr/>
        <div className='follow-us conus'>
            <b>CONTACT US</b>
            <a href="mailto:president.jyc@juitsolan.in">JYC President - president.jyc@juitsolan.in</a>
            <a href="mailto:jycphotographyclub1@gmail.com">Support - jycphotographyclub1@gmail.com</a>
            <a herf="">Address - Waknaghat, P.O. Waknaghat, Teh Kandaghat, Distt. Solan PIN-173 234 (H.P.), India</a>
        </div>
        <hr/>
        <div className='follow-us footend'>
        © JYC 2022 All rights reserved
        <div> 
            <Link to="/">Certification</Link> | <Link to="/">Coordinators Login</Link> </div>
        </div>

    </div>
  )
}
