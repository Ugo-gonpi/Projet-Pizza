import React from 'react';

const ProjetFooter = () => {

    return (
        <div className='w-full h-[15%] bg-red-700 flex justify-center items-center flex-col'>

            <div className='w-full h-[85%] flex justify-evenly items-center'>

                <img src={new URL(`../assets/facebook.png`, import.meta.url).href} className='w-[30px] h-[30px]'/>

                <img src={new URL(`../assets/linkedin.png`, import.meta.url).href} className='w-[30px] h-[30px]'/>

                <img src={new URL(`../assets/instagram.png`, import.meta.url).href} className='w-[30px] h-[30px]'/>

            </div>

            <div className='w-full flex justify-center items-center flex-col'>

                <p>Tous droits et honneurs réserver pour:</p>

                <p>Ugo Gonzalez Pinto ©</p>

            </div>

        </div>
    );
}

export default ProjetFooter;
