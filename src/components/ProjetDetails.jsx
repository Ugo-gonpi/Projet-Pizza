import React from 'react';

import ProjetHeader from './ProjetHeader';

import ProjetFooter from './ProjetFooter';

import data from './../data.json'

import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const ProjetDetails = () => {

    const {id} = useParams();

    return (
        <div className='w-screen h-screen'>
            <ProjetHeader/>

            <div className='w-full h-[75%] bg-[url("./assets/bg-pizza.jpg")] bg-no-repeat bg-cover flex justify-center items-center'>

                <div className='w-[50%] h-full flex justify-center items-center flex-col'>

                    <p className='text-white text-[45px] mb-[10px] font-bold underline italic'>{data[id].name}</p>

                    <Link to={'/Projet-Pizza'}>

                        <img src={new URL(`../assets/${data[id].img}`, import.meta.url).href} className='w-[400px] h-[400px] rounded-[50%] hover:brightness-110'/>

                    </Link>

                </div>

                <div className='w-[50%] h-full flex justify-center items-center flex-col'>

                    <div className='border-2 border-black flex justify-center items-center flex-col w-[300px] h-[150px] text-center bg-orange-500'>

                        <p className='text-black text-[25px] font-bold'>Ingredients: </p>
                                
                        <p className='text-black italic'>{data[id].ingredients}</p>
                                
                        <button className='text-white bg-green-600 w-[100px] h-[30px] mt-[5px] rounded-[5px] hover:bg-green-500 italic'>Add to cart</button>
                                
                    </div>

                </div>

            </div>

            <ProjetFooter/>
        </div>
    );
}

export default ProjetDetails;
