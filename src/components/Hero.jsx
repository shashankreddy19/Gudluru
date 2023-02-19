import React from 'react'
import styled from 'styled-components'
import Img1 from '../Images/battery.gif'

const Container =styled.div`
    padding: 142px 120px;
    position: relative;
    display: flex;
    justify-content: space-around;
    height: fit-content;
    border-bottom:2px solid black ;
    @media (max-width: 786px)
    {
        padding: 80px;
    }
`

const Imgcontainer=styled.div`
   max-width: fit-content;
`

const Img=styled.img`
    width: 90%;
    @media (max-width: 786px)
    {
        width: 80%;
    }
`

const Content=styled.div`
    width: fit-content;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Desc=styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #0c0c0c;
    font-family: 'Comfortaa', cursive;
    font-size: 10px;
`
const H2=styled.div`
    font-family: 'Comfortaa', cursive;
    font-size: 35px;
    @media (max-width: 786px)
    {
        font-size: 20px;
    }
`
const H1=styled.div`
    font-family:'Dancing Script', cursive;
    font-size: 80px;
    @media (max-width: 786px)
    {
        font-size: 30px;
    }
`
const Text=styled.div`
    font-size: 15px;
    @media (max-width: 786px)
    {
        font-size: 10px;
    }
`
const Subtext=styled.div`
    font-size: 15px;
    text-align: right;
    @media (max-width: 786px)
    {
        font-size: 10px;
    }
`
const Register=styled.a`
    text-decoration: none;
    width: fit-content;
    color: azure;
    font-family: 'Comfortaa', cursive;
    font-size: 17px;
    display: block;
    padding: 10px;
    background-color: #d47945;
    border-radius: 10px;
    color: #fffefd;
    .fa-solid
    {
        margin-left: 10px;
    }
    &:hover{
        background-color: #ff5e00;
        transform: scale(1.1);
        transition: 0.1s ease-in-out;
        box-shadow: 0px 1px 4px #68635f;
    }
    cursor: pointer;
    @media (max-width: 786px)
    {
        padding: 7px;
        font-size: 8px;
        .fa-solid
        {
            margin-left: 5px;
        }
    }
    
`



const Hero = () => {
  return (
    <Container className="container">
        <Imgcontainer>
            <Img src={Img1} alt="" />
        </Imgcontainer>
        <Content>
            <Desc>
                <H1>Welcome !</H1>
                <Text>
                “Shutting off the thought process is not rejuvenating,
                 the mind is like a car battery 
                  it recharges by running.” <Subtext>~ Bill Watterson</Subtext>
                  </Text>
                <H2>Battery spare parts</H2>
            </Desc>
            <Register href='/register'>
                Register
                <i class="fa-solid fa-right-to-bracket" ></i>
            </Register>
        </Content>
    </Container>
  )
}

export default Hero
