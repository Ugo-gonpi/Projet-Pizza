import React, {useState} from 'react';

import Exo3Bienvenue from './Exo3Bienvenue'

import { useDispatch, useSelector } from 'react-redux';

const Exo3 = () => {

    const [connecting, setConnecting] = useState(false);

    const email = useSelector((state)=> state.login.email);

    const password = useSelector((state)=> state.login.password);

    const initializing = () => {
        if (email == "ugogonzalez50@gmail.com" && password == "Cool2002AZ") {
            setConnecting(!connecting)
        }
    }

    const dispatch = useDispatch();

    return (
        <div className='w-full h-full flex justify-center items-center flex-col text-center'>

            <div className='w-full flx justify-center flex-col'>

                <h1 className='text-white font-bold'>Exo3</h1>

                <p className='font-bold text-[25px] mb-[15px] mt-[10px] text-white'>Connexion a votre adresse mail</p>

                <div className='flex gap-5 flex-col w-full justify-center items-center'>
            
                    <input type="email" className='w-[250px] pl-[5px]' placeholder='Email' onChange={(e)=> {dispatch(getEmail(e.target.value))}}/>

                    <input type="password" className='w-[250px] pl-[5px]' placeholder='Mot de passe' onChange={(e)=> {dispatch(getPassword(e.target.value))}}/>

                </div>

                <button className='border-2 border-green-700 mt-[15px] w-[100px] font-bold bg-green-600 text-white hover:bg-green-500' onClick={() => initializing()}>Connect</button>

                {
                    connecting ? <Exo3Bienvenue/> : <div>Error!</div>
                }
          
            </div>
        </div>
    );
}

export default Exo3;
