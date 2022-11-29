import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAction, deleteAction } from '../redux/actions';
import { useState } from 'react';

function Hw() {
    let [number,setnumber] =  useState('');
    const handleChange =(e)=>{
        setnumber(Number(e.target.value))
    }
    const numbers = useSelector(state=>state.hwReducer.numbers)
    console.log(numbers);
    const dispatch =  useDispatch()

    const handleAdd=()=>{
        if(number!==''){
            dispatch(addAction(number))
            setnumber(number ='')
        }
      
    }
    const handleDelete=()=>{
        dispatch(deleteAction())
    }
  return (
    <div>
        <input type="number" onChange={handleChange} value={number} />
        <button onClick={handleAdd}>add</button>
        <button onClick={handleDelete}>delete</button>
        <ul>
            {numbers.map((item,id)=>{

              return  <li key={id}>{item}</li>
            })}
        </ul>

    </div>
  )
}

export default Hw