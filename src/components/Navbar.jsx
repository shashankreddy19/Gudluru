import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    position: sticky;
    padding: 12px 150px;
    background-color: #fae9dd;
    font-family: 'Ubuntu', sans-serif;
    color: #1f2525;
    border-radius: 0px 0px 5px 5px;
`
const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Center=styled.div`
    color: #36312e;
    padding: 5px 15px;
    font-family:'Dancing Script', cursive;
    font-weight: bold;
    font-size: 35px;
`

const Right=styled.div`
position: relative;
    display: flex;
    align-items: center;
`
const Menuitem =styled.a`
    text-decoration: none;
    display: block;
    margin-left: 20px;
    padding: 10px;
    color: #000000;
    font-family: 'Comfortaa', cursive;
    &:hover{
        color: #d47945;
        transition: 0.1s ease-in-out;
    }
`
const Left=styled.div`

    display: flex;
    width:90px;
    align-items: center;
    padding: 4px;
    background-color:#d47945;
    border-radius: 10px;
    font-style: oblique;
    font-weight: 500;
`
const LButton=styled.a`
   text-decoration: none;
   padding: 7px;
   border-radius: 5px 0px 0px 5px;
   background-color: #fae9dd;
   font-size: 15px;
   color: #000000;
   border: none;
`
const RButton=styled.a`
    text-decoration: none;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    font-size: 10px;
    padding: 7px;
    background-color: #484343b3;
    color: #ffffff96;
    border: none;
    &:hover{
        background-color: #fae9dd;
        color: #000000;
        box-shadow: 0px 2px 4px gray;
        transition: 0.1s ease-in-out;
   }
`
const Active=styled.a`
    text-decoration: none;
    display: block;
    margin-left: 40px;
    font-family: 'Comfortaa', cursive;
    padding: 10px;
    color: #d47945;
    &::after
    {
        content: '';
        width: 33px;
        height: 1.8px;
        position: absolute;
        top: 27px;
        left: 117px;
        background-color: #d47945;
    }
`
const Signin=styled.a`
    text-decoration: none;
    margin-left: 40px;
    display: block;
    padding: 10px 7px;
    font-family: 'Comfortaa', cursive;
    background-color: #d47945;
    border-radius: 10px;
    color: #ffffff;
    &:hover{
        background-color: #da6826;
        transform: scale(1.1);
        transition: 0.1s ease-in-out;
        box-shadow: 0px 1px 2px gray;
    }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
            <LButton href="#">
                    B 2 C
                </LButton>
                <RButton href="#">
                    B 2 B
                </RButton>
            </Left>
            <Center>
                Gudluru 
            </Center>
            <Right>
            <Menuitem href="#">
                <i class="fa-solid fa-magnifying-glass"></i>
                </Menuitem >
                <Active href="/">
                        Home
                </Active>
                <Menuitem href="#">
                    About Us 
                </Menuitem >
                <Menuitem href="#">
                Services 
                </Menuitem>
                <Menuitem href="#">
                    Help 
                </Menuitem>
                <Signin href="/login">
                    Login/Sign-in 
                </Signin>
                <Menuitem href="/cart">
                    <i class="fa-solid fa-cart-shopping"></i>
                </Menuitem >
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
