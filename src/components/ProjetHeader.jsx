import React from 'react';

import { Link } from 'react-router-dom';

const ProjetHeader = () => {

    return (
        <div className='w-full h-[10%] bg-red-700 flex justify-between items-center'>

            <Link to={'/Projet-Pizza'} className='text-white text-[35px] ml-[20px] font-bold hover:underline'>Geek Pizza</Link>

            <Link to={'/checkout'}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </Link>

        </div>
    );
}

export default ProjetHeader;
