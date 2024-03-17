import React,{useState} from 'react'
import { iconClose, iconCloseGray } from './Images'

export default function ListOverllay({setToggleSide}) {


  return (
    <div className='listOverllay'>
      <div className='listOverllay__container'>
        <img src={iconCloseGray} alt="iconCloseGray" onClick={()=>setToggleSide(false)}/>
        <div className='listOverllay__container__list'>
          <div className='listOverllay__container__list__title'>
              Collections
              <div className='listOverllay__container__list__title--line'></div>
            </div>

            <div className='listOverllay__container__list__title'>
              Men
              <div className='listOverllay__container__list__title--line'></div>
            </div>

            <div className='listOverllay__container__list__title'>
              Women
              <div className='listOverllay__container__list__title--line'></div>
            </div>
            
            <div className='listOverllay__container__list__title'>
              About
              <div className='listOverllay__container__list__title--line'></div>
            </div>

            <div className='listOverllay__container__list__title'>
              Contect
              <div className='listOverllay__container__list__title--line'></div>
            </div>
          </div>

        </div>
    </div>
  )
}
