import React from 'react'
import Counter from './Counter'
import Aside from './Aside'


//----------REACT-----------
// function Main({num, setNum, color, setColor}) {
//   return (
//     <div className="main">
//       <Counter  num = {num} setNum={setNum}/>
//       <Aside color={color} setColor={setColor}/>
//     </div>
//   )
// }

// export default Main


//----------- REDUX-----------

function Main() {
  return(
    <div className='main'>
      <Counter />
      <Aside />
    </div>
  )
}
export default Main