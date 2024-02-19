import { Link } from 'react-router-dom'

const Homepage = () => {

    // const cartPage = (e) =>{
    //     e.preventDefault()
    //     useNavigate('/cart')
    // }

  return (
    <>
    {/* <a href=''>CART</a> */}
    <h1>HOMEPAGE</h1>
    <Link to="/mobiles">Mobiles</Link> <br />
    <Link to="/cart">Cart</Link>
    {/* <button onClick={cartPage} >CART</button> */}

    </>
  )
}

export default Homepage