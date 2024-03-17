import { useState } from 'react'
import Header from './Header'
import Seaction from './Seaction'
import Overllay from './Overllay'
import ListOverllay from './ListOverllay'


function App() {
  const [count, setCount] = useState(0)
  const [overToggle,setOverToggle] =  useState(false)
  const [selected, setSelected] = useState(0)
  const [cartList,setCartList] = useState([])
  const [toggleSide, setToggleSide] = useState(false)

  console.log(cartList)
  return (
    <>
      <Header cartList={cartList} setCartList={setCartList} setToggleSide={setToggleSide}/>
      <Seaction selected={selected} setSelected={setSelected} count={count} setCount={setCount} setCartList={setCartList} setOverToggle={setOverToggle}/>
      {overToggle&&<Overllay selected={selected} setSelected={setSelected} overToggle={overToggle} setOverToggle={setOverToggle} />}
      {toggleSide&&<ListOverllay setToggleSide={setToggleSide}/>}
    </>
  )
}

export default App
