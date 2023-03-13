import React,{useLayoutEffect} from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'
import {Link} from 'react-router-dom'

const Maincontainer=styled.div`
  padding: 20px 150px;
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
    padding:20px;
    display: flex;
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