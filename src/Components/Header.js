import React from 'react'


//----------REACT-----------
// function Header({num, color}) {
//   return (
//     <div className="header">
//       <h1 style={{color}}>REDUX Project</h1>
//       <h3>Count is {num} </h3>
//     </div>
//   )
// }

// export default Header

//----------- REDUX-----------
import {useSelector} from 'react-redux'

function Header() {
  const color = useSelector(state => state.color.value)

  const count = useSelector(state => state.count.value)
  return(
    <div className='header'>
      <h1 style={{color}}>REDUX Project</h1>
      <h3>Count is {count}</h3>
    </div>
  )
}
export default Header