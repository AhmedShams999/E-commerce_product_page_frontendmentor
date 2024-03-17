import React,{useState} from 'react'
import { imageProduct1,imageProduct2,imageProduct3,imageProduct4, imageProductThumbnail1 , imageProductThumbnail2, imageProductThumbnail3, imageProductThumbnail4, iconNext, iconPrevious, iconClose, iconCloseOrange } from './Images'

export default function Overllay({selected,setSelected,setOverToggle}) {
  const [hover, setHover] = useState(false)
  const imagesThumnail = [imageProductThumbnail1,imageProductThumbnail2,imageProductThumbnail3,imageProductThumbnail4]
  const imagesDisplay = [imageProduct1,imageProduct2,imageProduct3,imageProduct4]

  return (
    <div className='overllay'>
        <div className='overllay__container'>

          <div className='overllay__container__display'>
            <img className='overllay__container__display--close' src={hover?iconCloseOrange:iconClose} alt="" onClick={()=>setOverToggle(false)} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}/>
            <img className='overllay__container__display--displayImage' src={imagesDisplay[selected]} alt="imageProduct1" />
            <img className='overllay__container__display--move next' src={iconNext} alt="" onClick={()=> selected==3? setSelected(selected):setSelected(++selected)} />
            <img className='overllay__container__display--move prev' src={iconPrevious} alt="" onClick={()=> selected==0? setSelected(selected):setSelected(--selected)} />
          </div>
          
          <div className='overllay__container__list'>
              <div className={selected==0?"overllay__container__list--selcted":""} onClick={()=>setSelected(0)}>
                <img src={imagesThumnail[0]} alt="" />
              </div>

              <div className={selected==1?"overllay__container__list--selcted":""} onClick={()=>setSelected(1)}>
                <img src={imagesThumnail[1]} alt="" />
              </div>
              
              <div className={selected==2?"overllay__container__list--selcted":""} onClick={()=>setSelected(2)}>
                <img src={imagesThumnail[2]} alt="" />
              </div>
              
              <div className={selected==3?"overllay__container__list--selcted":""} onClick={()=>setSelected(3)}>
                <img src={imagesThumnail[3]} alt="" />
              </div>
              
          </div>
        </div>
    </div>
  )
}
