import React, { Component } from 'react'
import Navbar from '../components/Navbar'
// import Announcement from '../components/Announcement'
// import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Hero from '../components/Hero'

class Home extends Component{
  constructor() {
    super();
    this.state={
      clicked:false
    };
  }
  handleClick(newClicked)
  {
    this.setState({
      clicked:  newClicked
    });
  }
  
  render()
  {
    return ( 
      <div>
        {/* <Announcement/> */}
        <Navbar closeNav={this.handleClick.bind(this)}/>
        <Hero isClicked={this.state.clicked}/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
      </div>
    )
  }
  }
  
  export default Home

