import React from 'react'
import styled from 'styled-components'
import './Hero.css'
import Img1 from '../Images/battery.gif'
const Content=styled.div`
   margin-left: 400px;
`
const Desc=styled.p`
    
    position: absolute;
    color: #0c0c0c;
    top:120px;
    right:20px;
    font-family: 'Comfortaa', cursive;
    font-size: 10px;
`
const H2=styled.h2`
    margin-top: 70px;
    font-family: 'Comfortaa', cursive;
    font-size: 40px;
`
const H1=styled.h1`
    font-family:'Dancing Script', cursive;
    font-size: 80px;
`
const Text=styled.div`
    margin-top: 110px;
    width: 75%;
    font-size: 15px;
`
const Register=styled.div`
        position: absolute;
        color: azure;
        top:540px;
        right: 280px;
        font-family: 'Comfortaa', cursive;
        font-size: 20px;
        display: block;
        padding: 10px;
        background-color: #d47945;
        border-radius: 10px;
        color: #fffefd;
        &:hover{
            background-color: #ff5e00;
            transform: scale(1.1);
            transition: 0.1s ease-in-out;
            box-shadow: 0px 1px 4px #68635f;
        }
        cursor: pointer;
`
const Imgcontainer=styled.div`
   max-width: fit-content;
`

const Img=styled.img`
    width: 100%;
`
// const Center=styled.div`
//     position: absolute;
//     top: 160px;
//     right: 360px;
//     display: flex;
//     width:93px;
//     align-items: center;
//     padding: 5px;
//     background-color:#ff5e00;
//     border-radius: 4px;
//     font-style: oblique;
//     font-weight: 500;
// `
// const LButton=styled.a`
//    text-decoration: none;
//    padding: 8px;
//    border-radius: 5px 0px 0px 5px;
//    background-color: #ffffffa3;
//    color: #001010;
//    border: none;
// `
// const RButton=styled.a`
//     text-decoration: none;
//     cursor: pointer;
//     border-radius: 0px 5px 5px 0px;
//     font-size: 10px;
//     padding: 8px;
//     background-color: #484343b3;
//     color: #f0ffff97;
//     border: none;
//     &:hover{
//         background-color: #ffffffa6;
//         color: #000000;
//         box-shadow: 0px 2px 4px gray;
//         transition: 0.1s ease-in-out;
//    }
// `

const Hero = () => {
  return (
    <div className="container">
        <Imgcontainer>
            <Img src={Img1} alt="" />
        </Imgcontainer>
        <Content>
            <Desc>
                <H1>Welcome !</H1>
                <br></br>
                <Text>
                “Shutting off the thought process is not rejuvenating,
                 the mind is like a car battery 
                  it recharges by running.” ~ Bill Watterson
                  </Text>
                <br></br>
                <H2>Battery spare parts</H2>
            </Desc>
            {/* <Center>
                    <LButton href="#">
                        B 2 B
                    </LButton>
                    <RButton href="#">
                        B 2 C
                    </RButton>
                </Center> */}
            <Register>
                Register
                <i class="fa-solid fa-right-to-bracket" ></i>
            </Register>
        </Content>
    </div>
  )
}

export default Hero
