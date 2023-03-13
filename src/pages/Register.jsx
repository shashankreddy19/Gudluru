import React from 'react'
import { Router } from 'react-router-dom'
import styled from 'styled-components'
import limg from '../Images/Register1.png'
import {Link} from "react-router-dom"
import { display } from '@mui/system'
import Navbar from '../components/Navbar'

const Container=styled.div`
  /* background-color: black; */
  height: 80vh;
  padding: 100px 200px 50px;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`
const Right=styled.div`
  padding: 0;
`
const Lm=styled.img`
  width: 420px;
  height: 420px;
  /* clip-path: inset(0px 10px 45px 15px); */
`
const Left=styled.div`
    position: relative;
    border: 2px solid black;
    width: 30%;
    padding: 30px 30px 0;
`
const Input=styled.input`
    border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    width: 100%;
    margin: 10px 0 15px;
    &:focus
    {
      outline: none;
    }
`
const Label=styled.label`
      font-family: 'Ubuntu';
    font-weight: 600;
`
const Button=styled.button`
      background-color: rgb(0, 0, 0);
    border: none;
    color: azure;
    padding: 5px 12px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 1px 3px #ff5e00;
    font-family: 'Space Grotesk', sans-serif;
    transition: 100ms;
    &:hover
    {
      background-color: #ff5e00;
    box-shadow: 0px 1px 5px rgb(49, 48, 49);
    }
`
const Extra=styled.div`
    border-radius: 15px 15px 0 0;
    position: absolute;
    padding: 10px 30px;
    position: relative;
    background-color: #000000;
    box-shadow: 3px 0px 8px #ff5e00;
`
const Ep=styled.div`
    font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 14px;
    color: aliceblue;
` 
const Ea=styled.span`
    margin-left: 70px;
    cursor: pointer;
    color: #d66a4c;
    font-size: 17px;
    padding: 0;
    font-family: 'Raleway', sans-serif;
    transition: 100ms;
    &:hover
    {
      text-shadow:0px 1px 2px rgb(133, 130, 130);
    }

`


const Login = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Left>
        <form action="">
                <Label for="username">Username</Label>
               
                <Input type="text" name="username" placeholder="Enter your username" required></Input>
                <Label for="email">Email</Label>
                
                <Input type="email" name="email" placeholder="Enter your email" required></Input>
                
                <Label for="mobilenumber">Mobile Number</Label>
               
                <Input type="number" name="mobilenumber" placeholder="Enter your mobile number" required></Input>
                
                <Label for="password">Password </Label>
                
                <Input type="password" name="password" placeholder="Enter your password" required></Input>
                <Label for="password">Confirm Password </Label>
                
                <Input type="password" name="re-password" placeholder="Re-enter your password" required></Input>
                <div>
                    <Button type="submit">Create Account</Button>
                </div>
            </form>
            <br></br>
            <Extra>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                    <Ep>Already have an account? </Ep>
                    <Link style={{textDecoration:"none"}} to ="/login"> <Ea id="signin" >Sign-in</Ea> </Link>
                </div>
            </Extra>
        </Left>
        <Right>
          <Lm src={limg} alt="" />
        </Right>
      </Container>
    </div>
  )
}

export default Login
