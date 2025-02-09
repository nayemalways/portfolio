import React from 'react';
import { FaCircleArrowRight } from "react-icons/fa6";

import iconImage from '../assets/image/ui-ux.png'




const ServiceCard = () => {
    return (
        <>
            <div className="card rounded rounded-4" style={{minWidth: "16rem", maxWidth: '16rem', height: '20rem'}}>
                <div className="card-body">
                    <img style={{width: "25px"}} className='py-3' src={iconImage} alt="" />
                    <h5 className="card-title text-light">UI/UX design</h5>
                    <p className="card-text  text-secondary">We craft pixel-parfect design with Figma, designing experiences that captivate and convert. No clunky layouts, just smooth flows that guid your visitors.</p>
                    <a href="/contact" className="btn btn-outline-info">Start a project <FaCircleArrowRight /></a>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;