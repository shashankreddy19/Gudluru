import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import limg from '../Images/Limg.png'
const Container=styled.div`
  padding: 100px 100px 0px 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
`
const Left=styled.div`
  
  
`
const Lm=styled.img`
  width: 60%;
`
const Right=styled.div`
    position: relative;
    border: 2px solid black;
    width: 40%;
    padding: 30px 30px 0;
`
const Input=styled.input`
      border-top: none;
    border-left: none;
    border-right: none;
    background: none;
    width: 100%;
    margin: 10px 0 30px;
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
    display: flex;
    padding: 10px 30px;
    position: relative;
    background-color: #000000;
    align-items: center;
    justify-content: space-between;
    box-shadow: 3px 0px 8px #ff5e00;
`
const Ep=styled.div`
      font-family: 'Fira Sans Extra Condensed', sans-serif;
    font-size: 14px;
    color: aliceblue;
` 
const Ea=styled.div`
      text-decoration: none;
      cursor: pointer;
    color: #d66a4c;
    font-size: 17px;
    font-family: 'Raleway', sans-serif;
    transition: 100ms;
    &:hover
    {
      text-shadow:0px 2px 4px rgb(255, 255, 255);
    }

`


const Login = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <Left>
          <Lm src={limg} alt="" />
        </Left>
        <Right>
            <form action="">
                <Label for="username">Username/Email </Label>
                <br></br>
                <Input type="text" name="username" placeholder="Enter your email" required></Input>
                <br></br>
                <Label for="password">Password </Label>
                <br></br>
                <Input type="password" name="password" placeholder="Enter your password" required></Input>
                <Label for="password">Confirm Password </Label>
                <br></br>
                <Input type="password" name="re-password" placeholder="Re-enter your password" required></Input>
                <div>
                    <Button type="submit">Create Account</Button>
                </div>
            </form>
            <br></br>
            <br></br>
            <Extra>
                <div>
                    <Ep>Already have an account? <Ea id="signin" href="#">Sign-in</Ea> </Ep>
                </div>
                <div>
                    <Ea href="forgetpassword.html">Forgot password?</Ea>
                </div>
            </Extra>
        </Right>
      </Container>
    </div>
  )
}

export default Login
