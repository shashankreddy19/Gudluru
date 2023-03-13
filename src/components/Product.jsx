import Search from '@mui/icons-material/Search'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React,{useLayoutEffect} from 'react'
import styled from 'styled-components'


/*const Circle=styled.div`
    width: 40%;
    height: 30%;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`*/
const Maincontainer=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const Container=styled.div`
  padding: 0;
   flex:1;
   margin: 5px 0px 25px 5px;
   border-radius: 20px;
   width: fit-content;
   height: 38vh;
   justify-content: center;
   background-color:#db8e61;
   position: relative;
   box-shadow: 0px 4px 2px #9c897e;
    &:hover
    {
      box-shadow: 2px 4px 4px #9c897e;
      transform: scale(1.05);
      transition: 0.15s ease-in ;
    }

`

const Image=styled.img`
    height: 75%;
    width:inherit;

    
`
const Info=styled.div`
font-family: 'Comfortaa', cursive;
    font-size: 17px;
    color: #353433;
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const Iconlist=styled.div`
  margin-right: 15px;
  display: flex;
  flex-direction: row;
`
const Icon=styled.div`

    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:5px;
    &:hover{
      background-color: #f2c794;
      box-shadow: 0px 1px 4px #656059;
      transition: 0.1s ease-in;
    }
`


const Product = ({item}) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});
  return (
     <Maincontainer>
      <Container>
        {/*<Circle/>*/}
        <Image src={item.img}/>
        
        <Info>
          {item.name}
          <Iconlist>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <Search/>
            </Icon>
            <Icon>
                <FavoriteBorderIcon/>
            </Icon>
          </Iconlist>
        </Info>
      </Container>
      </Maincontainer>
  )
}

export default Product
