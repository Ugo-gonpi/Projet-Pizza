import React from 'react';

import { useSelector } from 'react-redux';

const Exo2Affichage = () => {

    const nomForm = useSelector((state)=> state.form.name)

    const prenomForm = useSelector((state)=> state.form.firstName)

    const ageForm = useSelector((state)=> state.form.age)

    return (
        <div className='w-[150px] h-[150px] flex justify-center items-center flex-col gap-2'>

            <div className='w-full h-[33%] border-[2px] border-black text-center text-white'>Name: {nomForm}</div>

            <div className='w-full h-[33%] border-[2px] border-black text-center text-white'>First Name: {prenomForm}</div>

            <div className='w-full h-[33%] border-[2px] border-black text-center text-white'>Age: {ageForm}</div>
            
        </div>
    );
}

export default Exo2Affichage;
