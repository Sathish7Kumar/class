// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Cart from './pages/Cart'
// import Homepage from './pages/Homepage'
// import Mobile from './pages/Mobile'

import ProductDisplay from "./shop/ProductDisplay"
import './App.css'


const App = () => {
  return (
    <>
     {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/mobiles' element={<Mobile/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </BrowserRouter> */}
    <>
    <ProductDisplay/>
    </>
    </>
  )
}

export default App


// import React from 'react'
// import Lifecycle from './pages/LifeCycle'

// const App = () => {
//   return (
//     <>
//      <h1>HELLO</h1>
//      <Lifecycle/>
//     </>
//   )
// }

// export default App

// life-cycle - human - 
// child didMount -> adult didUpdate ->
// older - willUnmount

// state -> class access
// life cycle -> class access


// func comp - state ->Hooks -> usestate
// func comp - lifecycle ->Hooks -> useeffect

// const [state, setState] = useState(0)
// // setState = state +1
// useEffect(() => {
//   return () => {
//     second
//   }
// }, [])


