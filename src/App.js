// import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import Cart from './pages/Cart'
// import Homepage from './pages/Homepage'
// import Mobile from './pages/Mobile'

import ProductDisplay from "./shop/ProductDisplay"
import './App.css'
import State from "./state/State"
import Home from "./mobile/Home"
import Products from './mobile/Products'
import ProductDetails from './mobile/ProductDetails'
import Lifecycle from './pages/LifeCycle'
import Effect from './Effect/Effect'
import Reducer from './Reducer/Reducer'
import HomeContext from './Context/HomeContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Navigation/Navigation'
import Navigation from './Navigation/Navigation'
import Vote from './condition/Vote'
import Login from './condition/Login'

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
    {/* <ProductDisplay/> */}
    {/* <Reducer/>
    <State/> */}
    </>
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<ProductDetails/>} />
      </Routes>
    </Router> */}
    {/* <Lifecycle/>
    <Effect/> */}
    {/* <HomeContext/> */}
    {/* <Navigation/>
    <Vote/> */}
    <Login/>
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


