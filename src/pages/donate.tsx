import React from 'react';

const Donate = () => {
    return (
        <div className="h-full p-8 border-2 border-light-yellow dark:border-dark-yellow flex flex-col overflow-auto">
            <h1 className='text-xl'>Donate</h1>
            <p>If you find any of my products useful you can choose to donate.</p>
            <button className='bg-light-yellow dark:bg-dark-yellow text-black dark:text-white p-2 rounded-md mt-4'>Donate</button>
        </div>
    );
};


export default Donate;