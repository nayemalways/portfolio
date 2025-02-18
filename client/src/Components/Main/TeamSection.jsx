import React from 'react';

import teamImage from '../../assets/image/me.png'



const TeamSection = () => {
    return (
        <>
          <section className='team-section '>
            <div className="container vh-100 pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div>
                            <h1 className='h1_color text-center mb-0 fw-bold'>Meet Our Team</h1>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex gap-4 flex-wrap justify-content-center pt-5">
                        
                        <div className="team-card ratio ratio-1x1 bg-warning rounded rounded-sm">
                            <img className='w-100 object-fit-cover rounded rounded-sm' src={teamImage} alt="Nayem"/>
                            <div className="hover-layer">
                                <div className="text">
                                    <h5 className=''>Nayem Ahmed</h5>
                                    <p className='text-info'>Web Developer</p>
                                    <p className='text-color'>1 Year experiance in web development</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-card ratio ratio-1x1 bg-warning rounded rounded-sm">
                            <img className='w-100 object-fit-cover rounded rounded-sm' src={teamImage} alt="Nayem"/>
                            <div className="hover-layer">
                                <div className="text">
                                    <h5 className=''>Nayem Ahmed</h5>
                                    <p className='text-info'>Web Developer</p>
                                    <p className='text-color'>1 Year experiance in web development</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-card ratio ratio-1x1 bg-warning rounded rounded-sm">
                            <img className='w-100 object-fit-cover rounded rounded-sm' src={teamImage} alt="Nayem"/>
                            <div className="hover-layer">
                                <div className="text">
                                    <h5 className=''>Nayem Ahmed</h5>
                                    <p className='text-info'>Web Developer</p>
                                    <p className='text-color'>1 Year experiance in web development</p>
                                </div>
                            </div>
                        </div>
                        <div className="team-card ratio ratio-1x1 bg-warning rounded rounded-sm">
                            <img className='w-100 object-fit-cover rounded rounded-sm' src={teamImage} alt="Nayem"/>
                            <div className="hover-layer">
                                <div className="text">
                                    <h5 className=''>Nayem Ahmed</h5>
                                    <p className='text-info'>Web Developer</p>
                                    <p className='text-color'>1 Year experiance in web development</p>
                                </div>
                            </div>
                        </div>

                       
                    </div>
                </div>
            </div>
          </section>
        </>
    );
};

export default TeamSection;



/*
   
*/