import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from './cakeSlice'
import React from 'react'
import './styles/cake.scss'

export const CakeView = () => {
  const numOfCakes = useAppSelector(state => state.cake.numOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button className='cake-button' onClick={() => dispatch(ordered())}>Order Cake</button>
      <button className='cake-button' onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  )
}
