import React, {useState} from 'react';

import Exo2Affichage from './Exo2Affichage';

import { getAge, getFirstName, getName } from '../features/form/formSlice';

import { useDispatch } from 'react-redux';

const Exo2 = () => {

    const [nameChange, setNameChange] = useState("");

    const [firstNameChange, setFirstNameChange] = useState("");

    const [ageChange, setAgeChange] = useState("");

    const tousChange = () => {
        dispatch(getName(nameChange));
        dispatch(getFirstName(firstNameChange));
        dispatch(getAge(ageChange));
    }

    const dispatch = useDispatch()

    return (
        <div className='w-full h-full flex justify-center items-center flex-col gap-2'>

            <h1 className='text-white font-bold'>Exo 2</h1>

            <div className='flex gap-5 flex-col'>
          
                <input type="text" className='w-[150px] pl-[5px]' placeholder='nom' onChange={(e) => {setNameChange(e.target.value)}}/>

                <input type="text" className='w-[150px] pl-[5px]' placeholder='prenom' onChange={(e) => {setFirstNameChange(e.target.value)}}/>
          
                <input type="text" className='w-[150px] pl-[5px]' placeholder='age' onChange={(e) => {setAgeChange(e.target.value)}}/>

            </div>

            <button className='border-black border-2 w-[100px] bg-slate-900 text-white' onClick={()=> tousChange()}>Submit</button>

            <Exo2Affichage/>

      </div>
    );
}

export default Exo2;
