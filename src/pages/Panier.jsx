import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Letter from '../components/Letter'
import Add from '@mui/icons-material/Add'
import Remove from '@mui/icons-material/Remove'



const Container = styled.div``
const Wrapper = styled.div`
padding:20px`

const Title = styled.h1`
text-align: center;
font-weight:400;
font-size:40px;
`;

const Top = styled.div`
display:flex;
align-items:center;
justify-content:space-between` 

const Button = styled.button`
padding:10px;
margin-left:10px;
margin-top:7px;
color:white;
background-color:#600b37;
border:none;
cursor: pointer;`
const Bottom = styled.div`
display: flex;
justify-content:space-between`

const Information = styled.div`
flex: 3;
`

const Product= styled.div`
display:flex;
justify-content: space-between;
`
const ProductDetail= styled.div`
flex:2;
display: flex;

`
const Image= styled.img`
height: 200px;
width:220px;
padding: 10px;
`
const Details= styled.div`
padding: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName= styled.div`
`
const ProductID= styled.span`
`
const ProductColor= styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
`
const ProductSize= styled.span`
`
const PriceDetail= styled.span`
flex:1;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;

`
const ProductAmountContainer = styled.div`
display:flex;
align-items:center`

const ProductAmount = styled.div`
font-size:20px`

const ProductPrice = styled.span`
font-size:30px;
margin-top:20px`

const Hr = styled.hr`
background-color: #f5e1ee57;
border:none;
height: 1px;
`
const Total = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
margin-top: 20px;
`
const TotalTitle = styled.h1`
font-weight:500;
font-size:25px;
text-align:center`

const TotalText = styled.span` font-weight:600`
const TotalPrice =styled.span``

const TotalItems=styled.div`
margin :30px 0px;
display: flex;
justify-content: space-between;`

const TotalButton=styled.button`
width:100%;
padding:10px;
background-color: #600836;
color:white;
border: none`

const Panier = () => {
  return (
   <Container>
    <Navbar/>
<Annoncement/>
<Wrapper>
<Title>Mon Panier</Title>
<Top>
<Button>CONTINUER LE SHOPPING</Button>
<Button>PAYER</Button>
</Top>
<Bottom>

<Information> 
<Product>
<ProductDetail>
<Image src ="https://i.ibb.co/0CF2FgX/t-shirt-manches-courtes-jaune-femme-fg-36125262280813062.jpg"/>
<Details>

<ProductName> <b>Produit:</b> Tshirt</ProductName>
<ProductID> <b>ID:</b> 9373829</ProductID>
<ProductColor color="yellow"/>
<ProductSize> <b>Taille:</b> S</ProductSize>
</Details>
</ProductDetail>
<PriceDetail> 
<ProductAmountContainer>
<Add/>
<ProductAmount>3</ProductAmount>
<Remove/>
</ProductAmountContainer>
<ProductPrice>20$</ProductPrice>
</PriceDetail>
</Product>
<Hr/>

<Product>
<ProductDetail>
<Image src ="https://i.ibb.co/LCcCytC/gilet.jpg"/>
<Details>

<ProductName> <b>Produit:</b> Tshirt</ProductName>
<ProductID> <b>ID:</b> 9373829</ProductID>
<ProductColor color="pink"/>
<ProductSize> <b>Taille:</b> M</ProductSize>
</Details>
</ProductDetail>
<PriceDetail> 
<ProductAmountContainer>
<Add/>
<ProductAmount>1</ProductAmount>
<Remove/>
</ProductAmountContainer>
<ProductPrice>45$</ProductPrice>
</PriceDetail>
</Product>


</Information>
<Total> 
<TotalTitle>
RECAPITULATIF

</TotalTitle>
<TotalItems>
<TotalText> TOTAL: </TotalText>
<TotalPrice>65$</TotalPrice>
</TotalItems>

<TotalItems>
<TotalText> LIVRAISON: </TotalText>
<TotalPrice>20$</TotalPrice>
</TotalItems>

<TotalItems>
<TotalText>  TOTAL COMMANDE: </TotalText>
<TotalPrice>85$</TotalPrice>
</TotalItems>
<TotalButton>PAYER MAINTENANT</TotalButton>
</Total>

</Bottom>
</Wrapper>
<Letter/>
<Footer/>

   </Container>
  )
}

export default Panier
