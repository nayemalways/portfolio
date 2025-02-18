import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircleArrowRight } from "react-icons/fa6";




const ServiceCard = ({data}) => {
 
    return (
        <>
            <div className="card rounded rounded-4" style={{minWidth: "16rem", maxWidth: '16rem', height: 'auto'}}>
                <div className="card-body text-start">
                    <img style={{width: "25px"}} className='py-3' src={ data.image } alt="" />
                    <h5 className="card-title text-light"> {data.title} </h5>
                    <p className="card-text  text-secondary"> {data.description} </p>
                    <Link to="/contact" className="btn btn-outline-info">Start a project <FaCircleArrowRight /></Link>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;