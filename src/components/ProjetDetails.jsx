import React from 'react';

import ProjetHeader from './ProjetHeader';

import ProjetFooter from './ProjetFooter';

import data from './../data.json'
import { Link } from 'react-router-dom';

const ProjetDetails = () => {
    return (
        <div className='w-screen h-screen'>
            <ProjetHeader/>

            {data.map((element, key)=> {
                return(
                    <div className='w-full h-[75%] bg-white flex justify-center items-center' key={key}>
                        <div className='w-[50%] h-full flex justify-center items-center flex-col'>

                            <p className='text-black text-[40px] mb-[10px] font-bold underline italic'>{element.name}</p>

                            <Link to={'/'}>

                                <img src={element.img} alt="" className='w-[400px] h-[400px] rounded-[50%] hover:brightness-110'/>

                            </Link>

                        </div>

                        <div className='w-[50%] h-full flex justify-center items-center flex-col'>
                            <div className='border-2 border-black flex justify-center items-center flex-col w-[300px] h-[150px] text-center bg-orange-500'>

                                <p className='text-black text-[25px] font-bold'>Ingredients: </p>
                                
                                <p className='text-black italic'>{element.ingredients}</p>
                                
                                <button className='text-white bg-green-600 w-[100px] h-[30px] mt-[5px] rounded-[5px] hover:bg-green-500 italic' onClick={(e)=> {dispatch(addToCart(e.target.value))}}>Add to cart</button>
                                
                            </div>
                        </div>
                    </div>
                )
            })}
            
            <ProjetFooter/>
        </div>
    );
}

export default ProjetDetails;
