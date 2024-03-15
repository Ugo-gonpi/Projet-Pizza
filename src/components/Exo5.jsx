import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

const Exo5 = () => {

    return (
        <div className='w-full h-full flex items-center flex-col gap-5 mt-5'>

            <h1 className='text-[35px] text-white underline font-bold'>To do List avec Redux</h1>

            <div className='w-full h-[25px] flex justify-center items-center gap-5'>

                <input type="text" className='w-[250px] h-full bg-white border-2 pl-[5px] text-black' placeholder='Ajouter une tâche'/>

                <button className='border-2 border-blue-700 w-[100px] text-white bg-blue-600 hover:bg-blue-500 hover:border-blue-600'>Submit</button>

            </div>

            <div className='w-[400px] h-[100px] bg-green-600 border-2 border-black shadow-xl rounded-[10px]'>

            </div>

        </div>
    );
}

export default Exo5;
