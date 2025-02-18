import React from 'react';
import { Link } from 'react-router-dom';

 


const Card = ({ data }) => {
 
    return (
        <>
            <Link to={'/blog-details'} className='text-decoration-none'>
                <div style={{minWidth: '15rem', maxWidth: '17rem' , height: "auto"}} className="card-hover rounded rounded-3 border     border-sm border-secondary">
                    <img className='w-100 rounded rounded-3' src={  data.image } alt="" />
                    <div className="p-2  text-start">
                        <h4 className='py-1 text-primary fw-bold'> { data.title } </h4>

                        { data?.description && (
                            <div style={{maxWidth: "17rem"}} className=' text-start line-clamp line-spacing' dangerouslySetInnerHTML={{ __html: data.description }}></div>
                        )}

                         
 
                        
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;