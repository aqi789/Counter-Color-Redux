import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

//----------REACT-----------
// import { useState } from 'react';

// function App() {
//   const [num, setNum] = useState(4)

//   const [color, setColor] = useState('red')

//   return (
//     <div className="App">
//       <Header num = {num} color={color} />
//       <Main num = {num} setNum={setNum} color={color} setColor={setColor} />
//       <Footer color={color}/>
//     </div>
//   );
// }

// export default App;

// -------------REDUX------------------
function App() {

  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
