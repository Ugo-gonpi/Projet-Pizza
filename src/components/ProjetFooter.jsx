import React from 'react';

const ProjetFooter = () => {

    return (
        <div className='w-full h-[15%] bg-red-700 flex justify-center items-center flex-col'>
        
            <div className='w-full h-[85%] flex justify-evenly items-center'>

                <img src={"/src/assets/facebook.png"} className='w-[30px] h-[30px]'/>

                <img src={"/src/assets/linkedin.png"} className='w-[30px] h-[30px]'/>

                <img src={"/src/assets/instagram.png"} className='w-[30px] h-[30px]'/>

            </div>

            <div className='w-full flex justify-center items-center flex-col'>

                <p>Tous droit et honneur réserver à:</p>

                <p>Ugo Gonzalez Pinto ©</p>

            </div>

        </div>
    );
}

export default ProjetFooter;
