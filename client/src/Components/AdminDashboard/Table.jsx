import React from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import image from '../../assets/image/people-image.png'



const Table = ({title, data}) => {
     

    return (
        <>
             <div className="col-12 col-md-12 col-lg-12 table-style">
                <h3 className='color'>{title}</h3>
                <div className=' table-responsive-sm p-sm-3 '>
                    <table className='table table-striped '>
                        <thead className='text-center'>
                            <tr>
                                <th>No:</th>
                                <th>Img</th>
                                <th>Title</th>
                                <th>Delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>

                            {

                                data.map((item, index) => {
                                    return (
                                        <tr key={index} className='text-center'>
                                            <td className='align-content-center'>{index + 1}</td>
                                            <td className='w-25 align-content-center'><img className='table-img rounded rounded-2' src={item.image} alt="" /></td>
                                            <td  className='text-ellipsis align-content-center'> {item.title || item.name} </td>
                                            <td><button className='btn'><MdDeleteSweep /></button></td>
                                            <td className='align-content-center'><Link to={`/dashboard/update/${item._id}`} className='d-block'><FaEdit /></Link></td>
                                        </tr>
                                    )
                                })

                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>                    
        </>
    );
};

export default Table;