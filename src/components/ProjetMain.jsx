import React from 'react';

import data from './../data.json';

import { Link } from 'react-router-dom';

import { addToCart } from '../features/pizzeria/pizzeriaSlice';

import { useDispatch } from 'react-redux';

const ProjetMain = () => {

    const dispatch = useDispatch()

    return (
        <div className='w-full h-[75%] bg-white flex justify-center items-center flex-wrap flex-row gap-5'>
            {data.map((element, key)=> {
                return (
                    <div key={key} className='w-[270px] h-[220px] bg-orange-400 rounded-[10px] flex items-center flex-col shadow-2xl'>

                        <Link className='w-full h-[100px] flex justify-center items-center mt-[5px]' to={"/details"}>
                            <img src={element.img} alt="" className='w-[70%] h-full rounded-[50%] hover:brightness-110'/>
                        </Link>

                        <p className='text-white font-bold mt-[5px] italic text-[24px]'>{element.name}</p>

                        <p className='text-amber-300 font-bold italic text-[20px]'>{element.prix} €</p>

                        <button className='text-white bg-green-600 w-[100px] h-[30px] mt-[5px] rounded-[5px] 
                        hover:bg-green-500 italic' onClick={(e)=> {dispatch(addToCart(e.target.value))}}>Add to cart</button>

                    </div>
                )
            })}
        </div>
    );
}

export default ProjetMain;
