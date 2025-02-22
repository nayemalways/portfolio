import React from 'react';


const TeamSection = ({data}) => {
 
    return (
        <>
          <section className='team-section'>
            <div className="container vh-100 pt-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className=''>
                            <h1 data-aos="fade-right" className='h1_color text-center mb-0 fw-bold '>Meet Our Team</h1>
                        </div>
                    </div>
                    <div className="col-md-12 d-flex gap-4 flex-wrap justify-content-center pt-5">
                        
                        

                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} data-aos="fade-up" className="team-card ratio ratio-1x1 rounded rounded-sm">
                                        <img className='w-100 object-fit-cover rounded rounded-sm' src={ item.image } alt="Nayem"/>
                                        <div className="hover-layer">
                                            <div className="text">
                                                <h5 className=''> {item.name} </h5>
                                                <p className='text-info'> {item.position} </p>
                                                <p className='text-color'> {item.experience} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        

                       
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