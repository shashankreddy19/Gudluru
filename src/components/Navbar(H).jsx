//import { MuiThemeProvider, SvgIcon } from '@material-ui/core';
//import {Search } from '@material-ui/icons';

//import { Badge } from '@material-ui/core'
//import { Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';


const Container = styled.div`
  background-color:black;
  color:white;
  height:60px;
  ${mobile({height:"50px"})};
`
const Wrapper=styled.div`
  padding:10px 20px;
  ${mobile({padding:"10px 0"})};
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const Left=styled.div`
display: flex;
align-items: center;
`

const LC=styled.div`
    display: flex;
    height: 30px;
    width: 50px;
    align-items: center;
    padding: 1px;
    background-color:#ff5e00;
    border-radius: 4px;
    font-style: oblique;
    font-weight: 500;
`
const LButton=styled.a`
   text-decoration: none;
   border-radius: 5px 0px 0px 5px;
   background-color: #ffffffa3;
   color: #001010;
   border: none;
   padding: 0px ;
   font-size: 15px;
`
const RButton=styled.a`
    text-decoration: none;
    cursor: pointer;
    border-radius: 0px 5px 5px 0px;
    font-size: 8px;
    background-color: #484343b3;
    color: #f0ffff97;
    border: none;
    &:hover{
        background-color: #ffffffa6;
        color: #000000;
        box-shadow: 0px 2px 4px gray;
        transition: 0.1s ease-in-out;
   }
`

const Language=styled.div`
  font-size:10;
  margin:10px;
  cursor:pointer;
  ${mobile({display:"none"})};
  `
const SearchContainer=styled.div`
  margin-left:25px;
  display: flex;
  align-items: center;
  border:0.5px solid lightblue;
  padding: 1px;
  background-color:white;
`
const Input=styled.input`
  border:None;
  ${mobile({width:"50px"})};
`

const Center=styled.div`
  flex:1;
  text-align:center;
`

const Logo=styled.h1`
  font-weight:bold;
  ${mobile({fontSize:"24px"})};
`

const Right=styled.div`
  flex:1;
  display:flex;
  justify-content: flex-end;
  ${mobile({flex:2,justifyContent:"center"})};
  align-items: center;
`
const MenuItem=styled.div`
  cursor: pointer;
  font-weight: 14px;
  margin-left: 25px;
  ${mobile({fontSize:"12px",marginLeft:"10px"})};
`

const Navbar = () => {
  return (
      <Container>
        <Wrapper>
          <Left>
          <LC>
                <LButton href="#">
                    B 2 B
                </LButton>
                <RButton href="#">
                    B 2 C
                </RButton>
            </LC>
            <SearchContainer>
              <Input placeholder='search'/>
              <Search style={{color:'blue',fontSize:14}}/>
            </SearchContainer>
            
          
          </Left>
          <Center><Logo>GUDLURU</Logo></Center>
          <Right>
              <MenuItem> Register </MenuItem>
              <MenuItem> SIGN IN </MenuItem>
              <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon/>
                </Badge>
              </MenuItem>
          </Right>
        </Wrapper>
        
      </Container>
  )
}

export default Navbar