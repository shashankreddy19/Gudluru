import { Badge } from '@mui/material'
import React, { Component } from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import gudluru from '../Images/gudluruLogo.jpg'
const Container=styled.div`
    position: sticky;
    top:0;
    z-index: 100;
    padding: 12px 150px;
    background-color: #fae9dd;
    font-family: 'Ubuntu', sans-serif;
    color: #1f2525;
    border-radius: 0px 0px 5px 5px;
    @media (max-width: 786px)
    {
        padding: 12px 50px;
        position: relative;
    }

`

const Wrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Center=styled.div`
    color: #36312e;
    padding: 5px 15px;
    font-family: 'Signika Negative', sans-serif;
    font-weight: bold;
    font-size: 35px;
`

const Icon=styled.div`
    cursor : pointer;
    display: none;
    @media (max-width: 786px)
    {
        display: block;
    }
`

const Right=styled.div`
    position: relative;
    display: flex;
    align-items: center;
    @media (max-width: 786px)
    {
        width: 45%;
        height: 50vh;
        z-index: 99;
        padding: 20px 30px 10px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        position: absolute;
        top:55px;
        right: 48px;
        border-radius: 10px;
        background-color: #e9bfa2;
        box-shadow: 0px 3px 9px #b9b2ae;
        display: ${(props) => (props.close ? "flex":"none")};
    }
    @media (max-width: 920px)
    {
       font-size: 13px;
    }
`

const Menuitem =styled.a`
    text-decoration: none;
    display: block;
    font-size: 14px;
    margin-left: 20px;
    padding: 10px;
    color: #000000;
    font-family: 'Comfortaa', cursive;
    &:hover{
        color: #da7337;
        transition: 0.1s ease-in-out;
        &:not(:last-child,:first-child) 
        {
            border-bottom: 1px solid #934214;
        }
    }
    @media (max-width: 1160px)
    {
        font-size: 12px;
        margin-left: 15px;
    }

`

// const Active=styled.a`
//     text-decoration: none;
//     display: block;
//     margin-left: 40px;
//     font-family: 'Comfortaa', cursive;
//     padding: 10px;
//     color: #d47945;
//     &::after
//     {
//         content: '';
//         width: 33px;
//         height: 1.8px;
//         position: absolute;
//         top: 27px;
//         left: 117px;
//         background-color: #d47945;
//     }
// `

const Signin=styled.a`
    font-size: 14px;
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
    @media(max-width: 786px)
    {
        margin-left: 20px;
    }
    @media (max-width: 1140px)
    {
       font-size: 12px;
    }
`
const Left=styled.div`

    display: flex;
    width:fit-content;
    align-items: center;
    padding: 4px;
    background-color:#d47945;
    border-radius: 10px;
    font-style: oblique;
    font-weight: 500;
    @media (max-width: 786px)
    {
        width: fit-content;
        font-weight: 300;
    }
    @media (max-width: 1140px)
    {
        width: fit-content;
        font-size: 12px;
    }
`

const LButton=styled.a`
   text-decoration: none;
   padding: 7px;
   border-radius: 5px 0px 0px 5px;
   background-color: #fae9dd;
   font-size: 12px;
   color: #000000;
   border: none;
   @media (max-width: 920px)
    {
        padding: 6px;
        font-size: 10px;
    }
   @media (max-width: 786px)
    {
        padding: 4px;
        font-size: 8px;
    }
`

const RButton=styled.a`
    text-decoration: none;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    font-size: 8px;
    padding: 7px;
    background-color: #484343b3;
    color: #ffffff96;
    border: none;
    @media (max-width: 920px)
    {
        font-size: 6px;
    }
    &:hover{
        background-color: #fae9dd;
        color: #000000;
        box-shadow: 0px 2px 4px gray;
        transition: 0.1s ease-in-out;
   }
   @media (max-width: 786px)
    {
        padding: 4px;
        font-size: 5px;
    }
`


class Navbar extends Component {
    state={clicked:false};
    handleClick =()=>{
        this.setState({
            clicked:!this.state.clicked
        });
        // this.props.closeNav(this.state.clicked);
    }

    render()
    {
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
                        {/* <img src={gudluru} height={"40px"} width={"40px"} ></img> */}
                        Gudluru 
                    </Center>
                    
                    <Right close={this.state.clicked}>
                        <Menuitem href="#">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Menuitem >
                        <Menuitem href="/">
                                Home
                        </Menuitem>
                        <Menuitem href="/about">
                            About
                        </Menuitem >
                        <Menuitem href="#">
                        Services 
                        </Menuitem>
                        <Menuitem href="#">
                            Help 
                        </Menuitem>
                        <Signin href="/login">
                            Login
                        </Signin>
                        <Menuitem href="/cart">
                            <Badge badgeContent={4} color="primary" >
                            <ShoppingCartOutlinedIcon/>
                                {/* <i class="fa-solid fa-cart-shopping"></i> */}
                            </Badge>
                            
                        </Menuitem >
                    </Right>
                    <Icon onClick={this.handleClick} >
                        <i  className={this.state.clicked ? 
                            "fas fa-times" :"fas fa-bars"}></i>
                    </Icon>
                </Wrapper>
            </Container>
        )
    }
}

export default Navbar
