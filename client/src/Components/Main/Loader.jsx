import React from 'react';

const Loader = () => {
    return (
        <div id='loader'>
            <div className="atom-spinner">
                <div className="spinner-inner">
                    <div className="spinner-line" />
                    <div className="spinner-line" />
                    <div className="spinner-line" />
                    {/*Chrome renders little circles malformed :(*/}
                    <div className="spinner-circle">●</div>
                </div>
            </div>
        </div>
    );
};

export default Loader;