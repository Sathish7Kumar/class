import React from 'react'
import { Link } from 'react-router-dom';

class Cart extends React.Component{
  state = {
    count : 0
  }

  addCount = () =>{
    this.setState({
      count : this.state.count + 1
    }, () =>{
      console.log(this.state.count);
    }
    )
  }

  render(){
    return(
      <>
        <h2>HELLO {this.state.count}</h2>
        <button onClick={this.addCount}>ADD COUNT</button>
        <Link to="/">HOME</Link>
      </>
    )
  }
}

export default Cart




