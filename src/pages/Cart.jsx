import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'
import formatCurrency from'../formatCurrancy'

<<<<<<< HEAD
 

const Container=styled.div`
    
    
`

const Wrapper=styled.div`
    padding:50px 100px 100px;
=======
const Container=styled.div``

const Wrapper=styled.div`
    padding:20px;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
    ${mobile({padding:"10px"})};
`

const Title=styled.h1`
<<<<<<< HEAD
    font-weight:450;
    font-family: 'Ubuntu', sans-serif;
=======
    font-weight:600;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
    text-align: center;
`

const Top=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
<<<<<<< HEAD
=======
`
const bo=styled.p`
    font-family: 'Ubuntu', sans-serif;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
`

const TopButton=styled.button`
    font-family: 'Comfortaa', cursive;
    padding:10px;
    font-weight: 600;
<<<<<<< HEAD
    border-radius: 6px;
=======
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
    cursor: pointer;
    border:${props => props.type === "filled" && "none"};
    border-color:${props => props.type !== "filled" && "#d47945"};
    background-color:${props => props.type === "filled" ? "#d47945" : "transparent"};
    color:${props => props.type === "filled" && "white"};
<<<<<<< HEAD
    &:hover{
        transform: scale(1.05);
        transition: 80ms ease-in;
        background-color:#d87034;
    }
=======
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
`

const TopTexts=styled.div`
    ${mobile({display:"none"})};
`

const TopText=styled.span`
    font-family: 'Ubuntu', sans-serif;
    text-decoration: none;
    padding-bottom: 8px;
    margin:0 10px;
    cursor: pointer;
    &:hover
    {
        border-bottom: 1px solid #d47945;
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
    margin:30px;
`

const Details=styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
<<<<<<< HEAD
`
const Bo=styled.p`
    font-family: 'Comfortaa', cursive;
`

const ProductName=styled.span`
font-family: 'Raleway', sans-serif;
font-size:20px;

`

const ProductId=styled.span`
    font-family: 'Dosis', sans-serif;
    font-size:20px;
    font-weight: 2px;
=======
`

const ProductName=styled.span`
    font-size:20px;
`

const ProductId=styled.span`
    font-size:20px;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
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
`

const ProductAmount=styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px 15px"})};
`

const ProductPrice=styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})};
`

const Hr=styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
<<<<<<< HEAD

=======
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
const Summary=styled.div`
    flex: 1;
    border:0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
<<<<<<< HEAD
    height: 45vh;
=======
    height: 50vh;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    margin-left: 10px;
`

const SummaryTitle=styled.h1`
<<<<<<< HEAD
        font-weight:450;
    font-family: 'Ubuntu', sans-serif;
=======
    font-weight:300;
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
`

const SummaryItem=styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type=== "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText=styled.span`
font-family: 'Comfortaa', cursive;
`

const SummaryItemPrice=styled.span``

const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: #d47945;
    font-family: 'Comfortaa', cursive;
    color: white;
<<<<<<< HEAD
    border: none;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    &:hover{
        transform: scale(1.05);
        transition: 80ms ease-in;
        background-color:#d87034;
=======
    font-weight: 600;
    cursor: pointer;
    &:hover{
        background-color: #f19035; 
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
    }
`

const Cart = () => {
    
  return (
    <Container>
      <Navbar/>
      {/*<Announcement/>*/}
      <Wrapper>

        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>Continue Shopping</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">Checkout</TopButton>
        </Top>

        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://th.bing.com/th/id/OIP.iIaBPwT7jaKkiuMO5DCpjQHaGl?w=200&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                        <Details>
<<<<<<< HEAD

                            <ProductName><Bo>Product : </Bo>Battery </ProductName>

                            <ProductId><Bo>ID:</Bo>123456</ProductId>

=======
                            <ProductName><bo>Product : </bo>Battery </ProductName>
                            <ProductId><bo>ID:</bo>123456</ProductId>
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
                            {/*<ProductColor color={"green"}/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>*/}
                        </Details>
                    </ProductDetail>

                    <PriceDetails>
                        <ProductAmountContainer>
<<<<<<< HEAD

                            
                            <Remove/>

                            <ProductAmount>1</ProductAmount>

                            <Add/>

=======
                            <Add/>
                            <ProductAmount>1</ProductAmount>
                            <Remove/>
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
                        </ProductAmountContainer>
                        <ProductPrice>{formatCurrency(300)}</ProductPrice>
                    </PriceDetails>
                </Product>

                <Hr/>
                <Product>

                    <ProductDetail>
                        <Image src="https://th.bing.com/th?id=OIP.4icr7ZTWPl6YGFA53T91hQHaG5&w=258&h=241&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"/>
                        <Details>

<<<<<<< HEAD
                            <ProductName><Bo>Product : </Bo>Battery Cell </ProductName>

                            <ProductId><Bo>ID:</Bo>923456</ProductId>

=======
                            <ProductName><b>Product : </b>Battery Cell </ProductName>
                            <ProductId><b>ID:</b>923456</ProductId>
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
                            {/*<ProductColor color={"black"}/>
                            <ProductSize><b>Size:</b>37.5</ProductSize>*/}
                        </Details>
                    </ProductDetail>

                    <PriceDetails>
                        <ProductAmountContainer>
<<<<<<< HEAD

                            <Remove/>

                            <ProductAmount>2</ProductAmount>

                            <Add/>

=======
                            <Add/>
                            <ProductAmount>2</ProductAmount>
                            <Remove/>
>>>>>>> 99be643093ef0871b546e0489dc61611daad3514
                        </ProductAmountContainer>

                        <ProductPrice>{formatCurrency(100)}</ProductPrice>
                    </PriceDetails>

                </Product>
            </Info>

            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>{formatCurrency(400)}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>{formatCurrency(50.69)}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem>
                    <SummaryItemText>Shipping Shipping</SummaryItemText>
                    <SummaryItemPrice>{formatCurrency(-50.69)}</SummaryItemPrice>
                </SummaryItem>

                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>{formatCurrency(400)}</SummaryItemPrice>
                </SummaryItem>

                <Button>Checkout</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart