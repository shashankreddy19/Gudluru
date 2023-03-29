import React,{useLayoutEffect} from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import {Link} from 'react-router-dom'
import { mobile } from '../responsive'

const Maincontainer=styled.div`
  padding: 3% 2% 3% 3%;
  ${mobile({padding:"80px 0 0 10px"})};
`
const H1=styled.h1`
  font-size: 40px;
  color: #e3830d;
  font-family:'Dancing Script', cursive;
  &:hover{
    text-shadow:0.5px 0.5px 1px black;
  }
`
const Container=styled.div`
   // padding:10px;
    display: flex;
    width: 100%;
    //height:100vh;
    flex-wrap: wrap;
    justify-content: space-between;
    
  
`
const Products = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
    <Maincontainer>
      <Link to="/products" style={{textDecoration:"none"}}>
        <H1>
          Exclusive products
        </H1>
      </Link>
      <Link to="/product" style={{textDecoration:"none"}}>
        <Container>
          {popularProducts.map(item=>
            <Product item={item} key={item.id}/>)
          }
        </Container>
      </Link>
    </Maincontainer>
  )
}

export default Products