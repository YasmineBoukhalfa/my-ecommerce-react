
import styled from "styled-components"

const Container = styled.div`
flex:1;
margin: 3px;
height: 80vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;
const Info = styled.div`
top: 0%;
left: 0%;
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width:100%;
height:100%`;

const Title = styled.h1`
color:white;
margin-bottom : 20px`;

const Button = styled.button`
cursor:pointer;
border:none;
padding:10px;
color:gray;
font-weight:600`

const CategorieItem = ({item}) => {
  return (
   <Container>
<Image src ={item.img}/>
<Info>
    <Title> {item.title}</Title>
    <Button> SHOP NOW</Button>
</Info>
   </Container>
  )
}

export default CategorieItem