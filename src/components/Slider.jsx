import styled from "styled-components"
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sliderItems } from "../data";
import { useState } from "react";
import { mobile } from "../responsive";

const Container=styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position:relative;
    overflow: hidden;
    ${mobile({display:"none"})};
`
const Arrow=styled.div`
    display:flex;
    position:absolute;
    justify-content: center;
    align-items:center;
    height:25px;
    width:25px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.2);
    top:0;
    bottom:0;
    margin:auto;
    left:${props => props.direction === "left" && '10px'};
    right:${props => props.direction === "right" && '10px'};
    cursor: pointer;
    z-index: 2;
`

const Wrapper=styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex*-100 }vw);
    transition: all ease 1.2s;
`
const Slide=styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    background-color: #${props => props.bg};

`
const ImgContainer=styled.div`
    height:100%;
    padding-top:30px;
    //background-color: black;
    flex:1;
`
const Image=styled.img`
padding: 25px;
    height: 75%;

`
const InfoContainer=styled.div`
   flex:1;
    //background-color:gray;
    padding:50px;
`
const Title=styled.h1`
    font-size: 70px;
    
    
`
const Description=styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
`
const Button=styled.button`
    cursor: pointer;
    padding:10px;
    font-size:20px;
    background-color: transparent;
`

const Slider = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const handleClick=(direction)=>{
        if(direction==="left")
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        else
        setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ChevronLeftIcon/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => 
                <Slide bg={item.bg} key={item.id}>
                <ImgContainer>
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>Shop now</Button>
                </InfoContainer>
                </Slide>
            
            )}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ChevronRightIcon/>
        </Arrow>  
    </Container>
  )
}

export default Slider
