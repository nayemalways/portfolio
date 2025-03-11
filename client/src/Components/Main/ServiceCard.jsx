import React from 'react';

const ServiceCard = ({data}) => {
 
    return (
        <>
            <div data-aos="fade-up" className="card rounded rounded-4" style={{minWidth: "16rem", maxWidth: '16rem', height: 'auto'}}>
                <div className="card-body text-start">
                    <img style={{width: "25px"}} className='py-3' src={ data.image } alt="" />
                    <h5 className="card-title text-light"> {data.title} </h5>
                    <p className="card-text  text-secondary"> {data.description} </p>
                 </div>
            </div>
        </>
    );
};

export default ServiceCard;