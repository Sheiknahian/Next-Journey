import React from 'react';

const H3Text = ({children}) => {
    return (
        <div>
            <h3 className='font-bold text-4xl text-white'>{children}</h3>
        </div>
    );
};

export default H3Text;