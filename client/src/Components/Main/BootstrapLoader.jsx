import React from 'react';

const BootstrapLoader = () => {
    return (
        <>
            <div className="bootstrap-loader w-100 vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-info " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default BootstrapLoader;