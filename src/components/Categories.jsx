import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container=styled.div`
    display: flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:"0",flexDirection:"column"})};
`
const Main=styled.div`
  padding: 20px 150px;
`
const H1=styled.h1`
  font-size: 40px;
  color: #e3830d;
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
