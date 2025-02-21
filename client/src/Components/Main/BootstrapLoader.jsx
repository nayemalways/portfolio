import React from 'react';

const BootstrapLoader = () => {
    return (
        <>
            <div className="bootstrap-loader ">
                <div className="spinner-border text-info " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default BootstrapLoader;