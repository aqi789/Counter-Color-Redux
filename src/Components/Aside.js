import React from 'react'

//----------REACT-----------
// import randomColor from 'randomcolor'

// function Aside({color, setColor}) {

//   const newColor = randomColor()

//   const changeColor = () => {
//     setColor(newColor)
//   }
//   return (
//     <div className="aside">
//       <h2 style={{color}}> Aside</h2>
//       <button onClick={changeColor}>Change Color</button>
//     </div>
//   )
// }

// export default Aside
import { useSelector, useDispatch} from 'react-redux'
import randomColor from 'randomcolor'
import { change_color} from  '../Redux/Color/colorSlice'

function Aside() {

  const color = useSelector(state => state.color.value)

  const dispatch = useDispatch()
  const changeColor = () => {
    dispatch(change_color({
      color:randomColor()
    }))
  }

  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Aside