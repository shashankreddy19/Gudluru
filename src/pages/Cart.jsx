import Add from '@mui/icons-material/Add'

import Remove from '@mui/icons-material/Remove'

import React, { useReducer } from 'react'

import styled from 'styled-components'

import Announcement from '../components/Announcement'

import Footer from '../components/Footer'

import Navbar from '../components/Navbar'

import { mobile } from '../responsive'
import formatCurrency from'../formatCurrency'
import { fontSize } from '@mui/system'

 

const Container=styled.div`
    
`

const Wrapper=styled.div`
    padding:50px 100px 100px;
    ${mobile({padding:"10px"})};

`

const Title=styled.h1`
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 32px;
`

const Top=styled.div`

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 20px;
`

const TopButton=styled.button`

    padding:10px;
    font-family: 'Comfortaa', cursive;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;

    border:${props => props.type === "filled" && "none"};

    border-color:${props => props.type !== "filled" && "#d47945"};

    background-color:${props => props.type === "filled" ? "#d47945" : "transparent"};

    color:${props => props.type === "filled" && "white"};
    &:hover{
        color: azure;
        transform: scale(1.05);
        transition: 80ms ease-in;
        background-color:#d87034;
        border-color: white;        
    }
`

const TopTexts=styled.div`

    ${mobile({display:"none"})};

`

const TopText=styled.span`
    font-family: 'Kanit', sans-serif;
    margin:0 10px;
    padding-bottom: 8px;
    cursor: pointer;
   &:hover{
        border-bottom: 1px solid #d87034;
        color:#d87034 ;
   }

`

 

const Bottom=styled.div`

    display: flex;

    justify-content:space-between;

    ${mobile({flexDirection:"column"})};

`

const Info=styled.div`

    flex:3;

`

const Product=styled.div`

    display: flex;

    justify-content: space-between;

    ${mobile({flexDirection:"column"})};

    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);

`

const ProductDetail=styled.div`

    flex: 1;

    display: flex;

`

const Image=styled.img`

    height: 200px;

    margin:20px;

`

const Details=styled.div`

    padding: 20px;

    display: flex;

    flex-direction: column;

    justify-content:space-evenly;
`
const Bo=styled.p`
    font-family: 'Kanit', sans-serif;
    font-size: 22px;
`

const ProductName=styled.p`
    font-family: 'Comfortaa', cursive;
    line-height: 30px;
    font-size:15px;
    width: max-content;
`

const ProductId=styled.span`
font-family: 'Comfortaa', cursive;
line-height: 30px;
    /* font-family: 'Dosis', sans-serif; */
    font-size:15px;
    width: max-content;
`

const ProductColor=styled.div`

    width: 20px;

    height: 20px;

    border-radius: 50%;

    background-color: ${props=> props.color};

`

const ProductSize=styled.span``

const PriceDetails=styled.div`

    flex:1;

    display: flex;

    align-items: center;

    justify-content: center;

    flex-direction: column;

    ${mobile({flexDirection:"row",justifyContent:"space-around"})};

`

const ProductAmountContainer=styled.div`

    display: flex;

    align-items: center;

    margin-bottom:20px;

    font-size: 18px;

`

const ProductAmount=styled.div`

    margin: 5px;

    ${mobile({margin:"5px 15px"})};

`

const ProductPrice=styled.div`

    font-size: 20px;

    font-weight: 200;

    ${mobile({marginBottom:"20px"})};

`

const Hr=styled.hr`

    background-color: #eee;

    border: none;

    height: 1px;

 

`
const Summary=styled.div`

    flex: 1;

    border:0.5px solid lightgrey;

    border-radius: 10px;

    padding: 20px;
    height: 45vh;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);

    margin-left: 10px;

`

const SummaryTitle=styled.h1`
   
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 32px;
`

const SummaryItem=styled.div`

    margin: 30px 0;

    display: flex;

    justify-content: space-between;

    font-weight: ${props => props.type=== "total" && "500"};

    font-size: ${props => props.type === "total" && "24px"};

`

const SummaryItemText=styled.span`
font-family: 'Kanit', sans-serif;
`

const SummaryItemPrice=styled.span``

const Button=styled.button`

    width: 100%;

    padding: 10px;

    background-color: #d47945;
    font-family: 'Comfortaa', cursive;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: 80ms ease-in;
        background-color:#d87034;
    }

`

const Cart = () => {
    const initial=1
    const reducer =(state,action)=>
    {
        switch(action.type)
        {
            case 'incr':
                return state+1
            case 'decr':
                return state-1
            default:
                return state
        }
    }
    const[count1,dispatch1]= useReducer(reducer,initial)
    const[count2,dispatch2]= useReducer(reducer,initial)
    var shippingfee=25
    var conveniencefee=10
    var cost1=100*count1
    var cost2=200*count2
    if(count1+count2===0)
    {
        conveniencefee=0
        shippingfee=0
    }
  return (

    <Container>

      <Navbar/>

      {/*<Announcement/>*/}

      <Wrapper>

        <Title>Your Bag</Title>

        <Top>

            <TopButton>Continue Shopping</TopButton>

            <TopTexts>

                <TopText>Shopping Bag(2)</TopText>

                <TopText>Your Wishlist (0)</TopText>

            </TopTexts>

            <TopButton type="filled">Checkout now</TopButton>

        </Top>

        <Bottom>

            <Info>

                {  count1!==0 && <Product>

                    <ProductDetail>

                    <Image src="https://m.media-amazon.com/images/I/41C2LHSQoqS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"/>

                        <Details>

                            <ProductName><Bo>Product : </Bo>Component 1 </ProductName>

                            <ProductId><Bo>ID :</Bo>123456</ProductId>

                            {/*<ProductColor color={"green"}/>

                            <ProductSize><b>Size:</b>37.5</ProductSize>*/}

                        </Details>

                    </ProductDetail>

                    <PriceDetails>

                        <ProductAmountContainer>

                            
                            <Remove style={{fontSize:"18px",cursor:"pointer",color:"#f85c02"} } onClick={()=> dispatch1({type:'decr',id:'b'})}/>

                            <ProductAmount>{count1}</ProductAmount>

                            <Add style={{fontSize:"18px",cursor:"pointer",color:"#f85c02"} } onClick={()=> dispatch1({type:'incr',id:'b'})}/>

                        </ProductAmountContainer>

                        <ProductPrice>{formatCurrency(cost1)}</ProductPrice>

                    </PriceDetails>

                </Product>}

                <Hr/>

                { count2!==0 && <Product>

                    <ProductDetail>

                    <Image src="https://m.media-amazon.com/images/I/41C2LHSQoqS._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg"/>

                        <Details>

                            <ProductName><Bo>Product : </Bo>Component 2 </ProductName>

                            <ProductId><Bo>ID :</Bo>923456</ProductId>

                            {/*<ProductColor color={"black"}/>

                            <ProductSize><b>Size:</b>37.5</ProductSize>*/}

                        </Details>

                    </ProductDetail>

                    <PriceDetails>

                        <ProductAmountContainer>

                        <Remove style={{fontSize:"18px",cursor:"pointer",color:"#f85c02"} } onClick={()=> dispatch2({type:'decr',id:'b'})}/>

                        <ProductAmount>{count2}</ProductAmount>

                        <Add style={{fontSize:"18px",cursor:"pointer",color:"#f85c02"} } onClick={()=> dispatch2({type:'incr',id:'b'})}/>

                        </ProductAmountContainer>
                        
                        <ProductPrice>{formatCurrency(cost2)}</ProductPrice>

                    </PriceDetails>

                </Product>}

            </Info>

            <Summary>

                <SummaryTitle>Order Summary</SummaryTitle>

                <SummaryItem>

                    <SummaryItemText>Subtotal</SummaryItemText>

                    <SummaryItemPrice>{formatCurrency(cost1+cost2)}</SummaryItemPrice>

                </SummaryItem>

                <SummaryItem>

                    <SummaryItemText>Estimated Shipping</SummaryItemText>

                    <SummaryItemPrice>{formatCurrency(shippingfee)}</SummaryItemPrice>

                </SummaryItem>

                <SummaryItem>

                    <SummaryItemText>Convenience fee</SummaryItemText>

                    <SummaryItemPrice>{formatCurrency(conveniencefee)}</SummaryItemPrice>

                </SummaryItem>

                <SummaryItem type="total">

                    <SummaryItemText >Total</SummaryItemText>

                    <SummaryItemPrice>{formatCurrency(conveniencefee+cost1+cost2+shippingfee)}</SummaryItemPrice>

                </SummaryItem>

                <Button>Checkout now</Button>

            </Summary>

        </Bottom>

      </Wrapper>

      <Footer/>

    </Container>

  )

}

 

export default Cart