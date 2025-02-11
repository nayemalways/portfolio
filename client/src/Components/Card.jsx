import React from 'react';
import { Link } from 'react-router-dom';

import img from '../assets/image/technology.png';


const Card = () => {
    return (
        <>
            <Link to={'/blog-details'} className='text-decoration-none'>
                <div style={{minWidth: '15rem', maxWidth: '17rem' , height: "auto"}} className="card-hover rounded rounded-3 border border-sm border-secondary">
                    <img className='w-100 rounded rounded-3' src={img} alt="" />
                    <div className="p-2">
                        <h4 className='py-1'>How to learn MERN stack in 2025?</h4>
                        <p className='text-secondary line-spacing'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae delectus ad quibusdam illum dicta mollitia asperiores! Quos eos ipsam pariatur.</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Card;