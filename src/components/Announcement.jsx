import styled from "styled-components"

const Container=styled.div`
    background-color: teal;
    font-size:16px;
    height:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-weight: 500;
    
    
`
const Announcement = () => {
  return (
    <Container>
      Hey!! Have a super deal ... Save upto $50
    </Container>
  )
}

export default Announcement
