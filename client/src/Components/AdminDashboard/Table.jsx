import React from 'react';
import { Link } from 'react-router-dom';

import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { DeleteAlert } from '../../Helper/helper';
import { ApiRequest } from './../../ApiRequest/Api';



const Table = ({updatePage, section, title, data}) => {
     
    // => Handle items delete
     const deleteHandle = async (section, id) => {
            // Sweet alert confirm => true/undefined
            const confirmDelete = await DeleteAlert();
            // => If confirmDelete is true than Call delete API
            if(confirmDelete) {

                // => Delete API Called based on "section". 
                // => Section is a props value for recognization specifik table.
                // => "section" come from "DashHome.jsx"; 
                // => And it will dynamically called for delete items. 
                const result = await ApiRequest('GET', `/delete-${section}/${id}`); // Delete API

                // => Call API again for update data when Data has deleted
                if(result) {
                    const updateResult = await ApiRequest('GET', `/read-${section}`);
                    updatePage(updateResult.data, section);
                }
                
            }

     }

    return (
        <>
            <div className="col-12 col-md-12 col-lg-12 table-style">
                <h3 data-aos="fade-up-left" className='color'>{title}</h3>
                <div className='table-responsive p-sm-3'>
                    <table data-aos="fade-in" className='table table-striped'>
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
                                        <tr  key={index} className='text-center'>
                                            <td className='align-middle'>{index + 1}</td>
                                            <td className='align-middle'>
                                                <img className='table-img rounded rounded-2 img-fluid' src={item.image} alt="" />
                                            </td>
                                            <td className='text-truncate align-middle' style={{maxWidth: '150px'}}> 
                                                {item.title || item.name} 
                                            </td>
                                            <td className='align-middle'>
                                                <button onClick={() => deleteHandle(section, item['_id'])} className='btn btn-danger'><MdDeleteSweep /></button>
                                            </td>
                                            <td className='align-middle'>
                                                <Link to={`/dashboard/update-${section}/${item._id}`} className='d-block btn btn-success'>
                                                    <FaEdit />
                                                </Link>
                                            </td>
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