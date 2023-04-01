import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container=styled.div`
padding: 20px 0px 17px 120px;

    display: flex;
    ${mobile({flexDirection:"column"})};
`
const Left=styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding-top: 20px;

`
const Logo=styled.h1`
    font-family: 'Signika Negative', sans-serif;
    color:#e78045;
`
const Description=styled.p`
    margin-top:3px;
    margin-bottom: 10%;
    font-family: 'Comfortaa', cursive;
    
`
const SocialContainer=styled.div`
    font-family: 'Comfortaa', cursive;
    display: flex;
`
const SocialIcon=styled.div`
    width :40px ;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props=>props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
`
const Center=styled.div`
    flex:1;
    padding-top:20px;
    cursor: pointer;
    
    
`
const Title=styled.h3`
    font-family: 'Comfortaa';
    margin-bottom: 30px;
    text-decoration:underline;
`
const List=styled.ul`
    margin: 0;
    padding: 10px 20px 0 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction:row;
    justify-content: space-between;

`
const ListItem=styled.li`
    font-family: 'Comfortaa', cursive;
    margin-bottom:10px;
`

const Right=styled.div`
    margin-left:80px;
    flex:1.5;
    padding:20px;
    
`
const ContactItem=styled.div`
    font-family: 'Comfortaa', cursive;
    display: flex; 
    margin-bottom: 10px;
    position: position;
`
const Payment=styled.img`
    width: 80%;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>GUDLURU</Logo>
            <Description>
                we deliver trust, just rely on us
            </Description>
            <SocialContainer>
                <SocialIcon bg="0165E1">
                    <FacebookIcon/>
                </SocialIcon>
                <SocialIcon bg="E4405F">
                    <InstagramIcon/>
                </SocialIcon>
                <SocialIcon bg="25D366">
                    <WhatsAppIcon/>
                </SocialIcon>
                <SocialIcon bg="00deed">
                    <TwitterIcon/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <>
            <Title>Useful Links</Title>
            </>
            
            <List>
                <div>
                    <Link to="/" style={{textDecoration:"None"}}>
                        <ListItem>Home</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>My Account</ListItem>
                    </Link>
                    <Link to="/cart" style={{textDecoration:"None"}}>
                        <ListItem >Cart</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>Wishlist</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>Order Tracking</ListItem>
                    </Link>
                </div>
                <div>
                    <Link to="/about" style={{textDecoration:"None"}}>
                        <ListItem>About</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>Services</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>Help</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>FAQs</ListItem>
                    </Link>
                    <Link to="#" style={{textDecoration:"None"}}>
                        <ListItem>Terms & conditions</ListItem>
                    </Link>
                </div>
            </List>
        </Center>
        <Right>
            <Title>
                Contact
            </Title>
            <ContactItem>
                <PlaceIcon style={{marginRight:"10px"}} /> 
                6-8- 1218, KT Road,<br/>
                NGO Colony (Srinivasa Nagar)<br/>
                Tirupati 517501,<br/>
                Andhra Pradesh, India
            </ContactItem>
            <ContactItem>
                <PhoneIcon style={{marginRight:"10px"}}/>+91 8790834334
            </ContactItem>
            <ContactItem>
                <MailOutlineIcon style={{marginRight:"10px"}}/>sales@gudlurindustries.com
            </ContactItem>
            <Payment src="https://th.bing.com/th/id/R.df4c1861853f8af2c29d17d764d7b69d?rik=jQY6ekJTdmzHcQ&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f3%2fMajor-Credit-Card-Logo-Transparent-PNG.png&ehk=mk%2bTPLwBhCNX%2bbAmNsYZBP8f1hMTgxrIs%2b4LWNqpzPs%3d&risl=&pid=ImgRaw&r=0"/>
            
        </Right>
    </Container>
  )
}

export default Footer
