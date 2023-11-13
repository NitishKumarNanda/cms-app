import React from 'react'
import imgSrc from '../Images/DSC2384.JPG'
import './home.css';
export default function TextOverImage({banner}) {
    return (
        <div className="text-over-image-container">
            <img src={imgSrc} alt="img banner" className="text-over-image-image" />
            <div className="text-over-image-content">
                <h2>Secure your dream job in just 15 days, All from the comfort of your home!</h2><br/>
                <p>
                Placements By Mehta Training Sessions Are Based On 15-Day rigorous Training Program ensures a streamlined path to guaranteed job opportunities. <br/>Our comprehensive program includes expert live sessions, rigorous assessment tests, placement assistance, and mock interviews,<br/>All designed to secure you a promising career.
                </p>
                <button className="text-over-image-button" onClick={banner.bannerAction}>CONFIRM YOUR NEXT JOB</button>
            </div>
        </div>
    )
}
