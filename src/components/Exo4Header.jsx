import React from 'react';

import { changeStyle } from '../features/types/typesSlice';

import { useSelector, useDispatch } from 'react-redux';

const Exo4Header = () => {

    const bgHeader = useSelector((state)=> state.types.backgroundHeader);

    const bgMain = useSelector((state)=> state.types.backgroundMain);

    const bgFooter = useSelector((state)=> state.types.backgroundFooter);

    const bgButton = useSelector((state)=> state.types.backgroundButton);

    const textColor = useSelector((state)=> state.types.textColor);

    const dispatch = useDispatch();

    return (
        <div className='w-full h-full flex justify-around items-center flex-col'>

            <div className={`w-full h-[15%] ${bgHeader} flex justify-around items-center`}>

                <div>

                    <p className={`text-[25px] ${textColor}`}>Header</p>

                </div>

                <div className="dropdown">

                    <div tabIndex={0} role="button" className={`btn m-1 ${bgButton} ${textColor}`}>

                        Styles
                        <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>

                    </div>

                    <ul tabIndex={0} className={`dropdown-content z-[1] p-2 shadow-2xl ${bgButton} rounded-box w-52 ${textColor}`}>

                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Ligth" onClick={()=> dispatch(changeStyle(4))} /></li>
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" onClick={()=> dispatch(changeStyle(1))} /></li>
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Funky" onClick={()=> dispatch(changeStyle(2))} /></li>
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" onClick={()=> dispatch(changeStyle(3))} /></li>

                    </ul>

                </div>

            </div>

            <div className={`w-full h-[70%] ${bgMain} flex justify-center items-center`}>
            
                <p className={`text-[70px] ${textColor}`}>Main</p>
                
            </div>

            <div className={`w-full h-[15%] flex justify-center items-center ${bgFooter}`}>
            
                <p className={`text-[25px] ${textColor}`}>Footer</p>
                
            </div>

        </div>
    );
}

export default Exo4Header;
