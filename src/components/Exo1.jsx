import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { increment, decrement, incrementByValue, decrementByValue } from '../features/counter/counterSlice';

const Exo1 = () => {

    const count = useSelector((state) => state.counter.value);
    
    const [initialNumber, setInitialNumber] = useState(0);

    const dispatch = useDispatch()
  
    return (
        <div className='w-[98%] h-full flex justify-center items-center flex-col ml-[10px] text-center'>

            <h1 className='text-white font-bold'>Exo 1</h1>

            <h1>{count}</h1>

            <div className='flex gap-5'>

            <button onClick={()=>dispatch(increment())}>+</button>

            <button onClick={()=>dispatch(decrement())}>-</button>

            </div>

                <input type="number" value={initialNumber} onChange={(e) => {setInitialNumber(e.target.value)}} className='border-black border-2 pl-[5px] w-[100px]'/>

            <div className='flex gap-3'>

            <button onClick={() => {dispatch(incrementByValue(parseInt(initialNumber)))}} className='border-black border-2 mt-2 bg-green-600 text-white'>Augemente Par</button>

            <button onClick={() => {dispatch(decrementByValue(parseInt(initialNumber)))}} className='border-black border-2 mt-2 bg-red-600 text-white'>Decremente Par</button>

        </div>

      </div>
    );
}

export default Exo1;
