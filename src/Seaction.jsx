import React,{useState} from 'react'
import { imageProduct1,iconCartWhite,imageProduct2,imageProduct3,imageProduct4, imageProductThumbnail1 , imageProductThumbnail2, imageProductThumbnail3, imageProductThumbnail4, iconMinus, iconPlus, iconNext, iconPrevious } from './Images'

export default function Seaction({selected,setSelected,count,setCount,setCartList,setOverToggle}) {
  const imagesThumnail = [imageProductThumbnail1,imageProductThumbnail2,imageProductThumbnail3,imageProductThumbnail4]
  const imagesDisplay = [imageProduct1,imageProduct2,imageProduct3,imageProduct4]

  const addToCart = ()=>{
    if(count==0){
      alert("Please Determine The Quantity")
    }else{
      setCartList(prevState => [...prevState,{
        id: Math.ceil(Math.random() * 1000),
        name: "Fall Limited edition Sneakers",
        image: imagesThumnail[selected],
        quantity: count,
        price: 125.00 ,
      }])
    }
  }

  return (
    <section className='section'>

      <div className='section__left'>
        <div className='section__left__display'>

          <div className='section__left__display--move next' onClick={()=> selected==3? setSelected(selected):setSelected(++selected)}>
            <img src={iconNext} alt="next" />
          </div>

          <img className='section__left__display--displayImage' src={imagesDisplay[selected]} alt="imageProduct1" onClick={()=>setOverToggle(true)}/>
          <div className='section__left__display--move prev'>
            <img src={iconPrevious} alt="prev" onClick={()=> selected==0? setSelected(selected):setSelected(--selected)} />
          </div>


        </div>
        
        <div className='section__left__list'>
            <div className={selected==0?"section__left__list--selcted":""} onClick={()=>setSelected(0)}>
              <img src={imagesThumnail[0]} alt="" />
            </div>

            <div className={selected==1?"section__left__list--selcted":""} onClick={()=>setSelected(1)}>
              <img src={imagesThumnail[1]} alt="" />
            </div>
            
            <div className={selected==2?"section__left__list--selcted":""} onClick={()=>setSelected(2)}>
              <img src={imagesThumnail[2]} alt="" />
            </div>
            
            <div className={selected==3?"section__left__list--selcted":""} onClick={()=>setSelected(3)}>
              <img src={imagesThumnail[3]} alt="" />
            </div>
            
        </div>

      </div>

      <div className='section__right'>
          <p className='section__right__firstText'>SNEAKER COMPANY</p>
          <h1 className='section__right__headerText'>Fall Limited edition Sneakers</h1>
          <p className='section__right__longText'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
          <div className='section__right__price'>
            <div className='section__right__price__priceContner'>
              <h1>$125.00</h1>
              <p>50%</p>
            </div>
            
            <p className='section__right__price__priceBefore'>$250.00</p>
          </div>

          <div className='section__right__buttonContner'>
            <div className='section__right__buttonContner__addToCart'>
              <button className='section__right__buttonContner__addToCart--sympole' onClick={()=> count==0? setCount(count):setCount(--count)}>
                <img src={iconMinus} alt="iconMinus" />
              </button>
              <p className='section__right__buttonContner__addToCart--num'>{count}</p>
              <button className='section__right__buttonContner__addToCart--sympole' onClick={()=> setCount(++count)}>
                <img src={iconPlus} alt="iconPlus" />
              </button>
            </div>

            <button className='section__right__buttonContner--btn' onClick={addToCart}>
              <img src={iconCartWhite} alt="logoIcon" />
              Add to cart
             </button>
          </div>
      </div>

    </section>
  )
}
