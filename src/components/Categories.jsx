import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Main=styled.div`
  padding: 2% 2% 0 2%;
  ${mobile({padding:"10px 0 0 10px"})};
`
const Container=styled.div`
    display: flex;
    padding:20px;
    min-width:1000px;
    justify-content:space-between;
    flex-wrap:wrap;
    ${mobile({padding:"0",flexDirection:"column"})};
`
const H1=styled.h1`
  font-size: 40px;
  color: #e68938;
    font-family:'Dancing Script', cursive;
`
const Categories = () => {
  return (
    <Main>
      <H1>Categories</H1>
      <Container>
        {categories.map(item =>
          <CategoryItem item={item} key={item.id}/>)
        }
      </Container>
    </Main>
  )
}

export default Categories
