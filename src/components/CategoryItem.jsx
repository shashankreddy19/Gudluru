import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    position: relative;
    padding-bottom:5px;
    margin-right: 20px;
    flex:1;
    width: fit-content;
    height:48.5vh;
    position: relative;
    border-radius: 20px;
    background-color: #f0b18c;
    box-shadow: 0px 2px 2px #9c897e;
    &:hover
    {
      box-shadow: 2px 2px 5px #9c897e;
      transform: scale(1.03);
      transition: 0.15s ease-in ;
    }
`
const Image=styled.img`
    
    width: 100%;
    height: 40vh;
    object-fit: cover;
    ${mobile({width:"80vw"})};
    //opacity: 0.8;
`
const Info=styled.div`
    position: absolute;
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    
    justify-content: space-between;

`
const Title=styled.h1`
    font-family: 'Comfortaa', cursive;
    font-size: 20px;
    color: #353433;
    margin:20px;
`
const Button=styled.button`
    margin-right: 10px;
    border:none;
    font-family: 'Comfortaa', cursive;
    float: left;
    padding:10px;
    background-color: #f4fafa;
    color: gray;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    &:hover
    {
      box-shadow: 2px 4px 4px #9c897e;
      transform: scale(1.05);
      transition: 0.15s ease-in ;
    }
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop now</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
