import React, { useState } from 'react'
import {iconCart, iconCartBlack, iconDelet, imageProductThumbnail1} from "./Images"

export default function Cart({cartList,setCartList}) {
  const [toggle,setToggle] =  useState(false)

  const deleteItem = (id)=>{
    setCartList(prev=> prev.filter(item => item.id != id))
  }
  const showItems = ()=>{
    return cartList.map(item=>{
      return (
        <div className='header__right__cartContainer--notification__seconedPart__cartItems__item' key={item.id}>
          <img className='header__right__cartContainer--notification__seconedPart__cartItems__item--selectedItem' src={item.image} alt="thumnailImage" />
          <div>
            <p>{item.name}</p>
            <p>${item.price} x {item.quantity} <span>${(item.price * item.quantity).toFixed(2)}</span></p>
          </div>
          <img className='header__right__cartContainer--notification__seconedPart__cartItems__item--delete' src={iconDelet} alt="iconDelet" onClick={()=> deleteItem(item.id)} />
        </div>
      )
    })
  }
  return (
    <div className='header__right__cartContainer'>
      <img className='header__right__cartContainer__cart' src={toggle?iconCartBlack:iconCart} alt="logoIcon" onClick={()=>setToggle(!toggle)}/>
      {cartList.length !=0 && <div className='header__right__cartContainer--numberOfItems'>{cartList.length}</div>}
      <div className={toggle?'header__right__cartContainer--notification active':'header__right__cartContainer--notification'} >
            <div className='header__right__cartContainer--notification__firstPart'>
              <h2>Cart</h2>
              <hr />
            </div>
            <div className='header__right__cartContainer--notification__seconedPart'>
              <div className='header__right__cartContainer--notification__seconedPart__cartItems'>
                {cartList.length ==0 ? 
                  <p className='header__right__cartContainer--notification__seconedPart__cartItems--empty'> Your cart is empty.</p>
                  :
                  showItems()
                }
              </div>
              {cartList.length !=0 &&<button>Checkout</button>}
            </div>
        </div>
        
    </div>
  )
}
