
import React from 'react'
import styled from "styled-components"
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';


const Info = styled.div`
opacity: 0;
width:100%;
height:100%;
position : absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0.2);
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div `
flex:1;
margin:5px;
min-width:280px;
min-height:350px;
display:flex;
align-items: center;
justify-content:center;
background-color: #dddada;
position:relative;

&:hover ${Info}{opacity:1;}`

const Image = styled.img`
width: 100%;
height: 90%;
object-fit: cover;
`

const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content: center;
margin:10px;
transition: all 0.5s ease;
&:hover{
    background-color: #5c4a4a;
    transform: scale(1.3);
}`

const Product = ({item}) => {
  return (
   <Container>
   <Image src = {item.img}/>
   <Info>
    <Icon>
        <ShoppingCartOutlined/>
    </Icon>
    <Icon>
        <SearchOutlined/>
    </Icon>
    <Icon>
        <FavoriteBorderOutlined/>
    </Icon>
   </Info>
   </Container>
  )
}

export default Product