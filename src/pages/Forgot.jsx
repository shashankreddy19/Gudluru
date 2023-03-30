import { ArrowBack, ArrowBackIosNewOutlined, ErrorOutline, ErrorOutlineOutlined, MailOutline, PriorityHigh, PriorityHighOutlined } from '@mui/icons-material'
import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import forgotimage from '../Images/forgotimage.png'
const Container=styled.div`
    display:flex;
    width: 100vw;
    height: 88vh;font-family: 'Comfortaa', cursive;
`
const Right=styled.div`
    flex: 1;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Left=styled.div`
    flex:1;
    display:flex;
    justify-content:center;align-items:center;
`
const Info=styled.div`
    text-align:center;
    padding:7% 3%;
    border:3px solid black;
    border-radius:5px;
    
`
const Email=styled.div`
    border-radius:2px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Button=styled.button`
    width:30%;
    padding:7px;
    border:'none';
    border-radius:5px;
    background-color:black;
    color:white;
    font-family:Ubuntu;
    cursor:pointer;
    box-shadow: 0px 2px 3px #cf723c;
    &:hover{
        background-color:#e6720c;
    }


`
const Back=styled.div`
    margin-top:10% ;
    display:flex;
    align-items: center;
    justify-content: center; 
`
const Forgot = () => {
  return (<><Navbar/>
    <Container>
    <Left>
            <img src={forgotimage} style={{width:'80%'}}></img>
        </Left>
        <Right>
            <Info>
              <i class="fa-solid fa-circle-exclamation fa-5x" style={{color:"#e6720c"}}></i>
                <h2 style={{padding:"10px",fontFamily:'Ubuntu',fontWeight:'600'}}>Forgot Password</h2>
                <p style={{padding:"10px",fontFamily:'Ubuntu'}}>Enter your email we"ll send you a link to reset your</p>
                <p>password</p>
                <Email>
                <input type="email" id="email" name="email" style={{height:'30px',width:'300px',paddingLeft:"40px",margin:'30px',background:'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstwrXD6fo1p1hXWXpsAlI3LvEopsGX6yzgQ&usqp=CAU")',backgroundSize:'25px',backgroundRepeat:'no-repeat',backgroundPosition:'9px 4px'}}></input>
                </Email>
                    <Button type="submit">Submit</Button>
                    <Back>
                    <ArrowBackIosNewOutlined fontSize="small"/>
                    <a href="/Login"  style={{textDecoration:"none",fontFamily: 'Raleway',color:' #e6720c',fontWeight:"bold"}}>Back to Login</a>
                    </Back> 
            </Info>
        </Right>  
    </Container></>
  )
}

export default Forgot
