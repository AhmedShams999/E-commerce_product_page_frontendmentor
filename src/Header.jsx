import React from 'react'
import {logo,imageAvatar, iconMenu} from "./Images"
import Cart from './Cart'

export default function Header({cartList,setCartList,setToggleSide}) {
  return (
    <header className='header'>
      
       <div className='header__left'>
          <img className='header__left--hamburgurIcon' src={iconMenu} alt="iconMenu" onClick={()=>setToggleSide(true)}/>
          <img className='header__left--logo' src={logo} alt="logoIcon" />
       </div>

       <div className='header__mid'>
          <div className='header__mid__title'>
            Collections
            <div className='header__mid__title--line'></div>
           </div>

          <div className='header__mid__title'>
            Men
            <div className='header__mid__title--line'></div>
           </div>

          <div className='header__mid__title'>
            Women
            <div className='header__mid__title--line'></div>
           </div>
          
          <div className='header__mid__title'>
            About
            <div className='header__mid__title--line'></div>
           </div>

          <div className='header__mid__title'>
            Contect
            <div className='header__mid__title--line'></div>
           </div>

       </div>

       <div className='header__right'>
          <Cart cartList={cartList} setCartList={setCartList}/>
          <div className='header__right__avatarContainer'>
            <img className='header__right__avatarContainer--avatar' src={imageAvatar} alt="logoIcon" />
          </div>
       </div>
      <hr className='header__line' />
    </header>
  )
}
