
import styled from 'styled-components';
import Instagram from '@mui/icons-material/Instagram';
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LocationOn from '@mui/icons-material/LocationOn';

const Container = styled.div`
display: flex;`

const Left = styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px`;

const Logo = styled.h1`
flex:1;`;

const Desc = styled.p`
margin:20px 0px
`
const SocialMediaContainer = styled.div`
display: flex;

`
const SocialMediaIcon = styled.div`
cursor: pointer;
width: 40px;
height:40px;
border-radius:50%;
color: white;
background-color: #${props => props.color};
display:flex;
align-items: center;
justify-content: center;
margin-right:20px

`;

const Center = styled.div`
flex:1;
padding:20px`;

const Title = styled.h3`
margin-bottom:15px`;
const List = styled.ul`
margin: 0;
padding:0;

list-style:none;
display: flex;
flex-wrap:wrap;`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex:1;
padding:20px`;

const ContactItem =styled.div`
margin-bottom: 15px;
display:flex;
align-items: center`

const Image = styled.img`
width:60%;
cursor:pointer`

function Footer() {
    return (
        <Container>
            <Left>
                <Logo> YAS SHOP</Logo>

                <Desc>Lorem ipsum dolor habitasse platea dictumst. Nunc ac justo sed odio efficitur vehicula et non lorem. Sed quis egestas libero, eget viverra odio. Mauris sagittis urna ullamcorper interdum sagittis. Maecenas lorem arcu, sollicitudin ac libero vitae, cursus blandit neque.
                    Suspendisse volutpat ac est at pretium. Integer felis libero, blandit a enim ac, porta pharetra enim.</Desc>
                <SocialMediaContainer>
                    <SocialMediaIcon color="466ef3"><Facebook /></SocialMediaIcon>
                    <SocialMediaIcon color="E4405F"><Instagram /></SocialMediaIcon>
                    <SocialMediaIcon color="55ACEE"><Twitter /></SocialMediaIcon>
                </SocialMediaContainer>
            </Left>

            <Center>
                <Title> LIENS RAPIDES</Title>
                
                <List>
                    <ListItem>Page d'accueil </ListItem>
                    <ListItem>Panier</ListItem>
                    <ListItem>Accessoires</ListItem>
                    <ListItem>Soldes</ListItem>
                    <ListItem>Nouveauté</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact</Title>
           
            <ContactItem> <LocationOn style ={{marginRight:"5px"}}/> Kouba, Alger, Algerie</ContactItem>
          
            <ContactItem> <Phone style ={{marginRight:"5px"}}/>+23 06 68 86 27 55</ContactItem>
           
            <ContactItem> <Email style ={{marginRight:"5px"}}/>  yasmine.boukhalfa96@gmail.com</ContactItem> 
            <Image src ="https://i.ibb.co/yfXtRZG/pngegg.png"/>

            </Right>
          
        </Container>
    )
}

export default Footer