import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'

const Maincontainer=styled.div`
  padding: 20px 150px;
`
const H1=styled.h1`
  font-size: 40px;
  color: #e3830d;
  font-family:'Dancing Script', cursive;
`
const Container=styled.div`
    padding:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Maincontainer>
       <H1>
        Exclusive products
      </H1>
      <Container>
        {popularProducts.map(item=>
          <Product item={item} key={item.id}/>)
        }
      </Container>
    </Maincontainer>
  )
}

export default Products