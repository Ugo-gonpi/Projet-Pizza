import React from 'react';

import ProjetHeader from './ProjetHeader';

import ProjetFooter from './ProjetFooter'

import ProjetMain from './ProjetMain';

const Projet = () => {
    
    return (
        <div className='w-full h-full'>
            <ProjetHeader/>

            <ProjetMain/>

            <ProjetFooter/>
        </div>
    );
}

export default Projet;
