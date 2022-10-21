import React from 'react'
import styled from 'styled-components'
import Annoncement from '../components/Annoncement'
import Footer from '../components/Footer'
import Letter from '../components/Letter'
import Navbar from '../components/Navbar'
import Remove from '@mui/icons-material/Remove';
import Add from '@mui/icons-material/Add';

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display:flex;`

const ImageContainer =styled.div`
flex:1;
`


const Image = styled.img`
width:70%;
height: 90vh;
object-fit: cover;
border: 10px;`


const InfoContainer = styled.div`
flex:1;
padding:0px 20px`

const Title =styled.h1`
font-weight:400`

const Desc = styled.p`
margin: 20px 0px`

const Price = styled.span`
font-weight:200;
font-size:40px`

const FilterContainer = styled.div`
width:50%;
margin:20px 0px;
display: flex;
justify-content : space-between;
`
const Filter = styled.div`
display:flex;
align-items:center`
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin: 0px 5px;
cursor: pointer`

const FilterTitle = styled.span`
font-size:20px;
font-weight:500;`

const FilterSize = styled.select`
margin-left:20px;
padding:5px`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 55%;
display: flex;
align-items: center;
justify-content: space-between;`

const AmountContainer = styled.div`
display: flex;
align-items: center;`

const Amount = styled.span`
width:30px;
height: 30px;
border-radius:10px;
border: 2px solid pink;
display:flex;
align-items:center;
justify-content: center;
margin: 0px 5px;
font-weight: 600;
`
  
const Button = styled.button`
padding: 15px;
border: 2px solid pink;
background-color:white;
cursor: pointer;
font-weight:600;
&:hover{
  background-color: pink;
}`




const Product = () => {
  return (
  <Container>
<Navbar/>
<Annoncement/>
<Wrapper>
<ImageContainer>
  <Image src="https://i.ibb.co/0fYBrND/DD926496-02.jpg"/>
</ImageContainer>
<InfoContainer>
<Title> Robe Leopard</Title>
<Desc>Vous avez l’intention d’être au top en ce moment avec une petite robe à imprimé léopard? Craquez pour la coupe hyper tendance de la saison. C'est simple, tout le monde en parle. Toutes les filles classes la portent</Desc>

<Desc>le coupe de la robe est juste sublime. On craque littéralement ❤️ </Desc>
<Desc>les finitions de la robe sont spécialement bien faites.</Desc>

<Desc>
une robe charmante</Desc>
<Desc>Rassurez-vous, il y en a pour toutes les morphologies et pour toutes les tailles. Cette robe est la démonstration exacte de la robe facile à porter pour beaucoup de filles. 
Magnifique</Desc>

<Price>45 $</Price>

<FilterContainer>
<Filter>
<FilterTitle> Couleur</FilterTitle>
<FilterColor color ="black"/>
<FilterColor color ="darkblue"/>
<FilterColor color ="brown"/>
<FilterColor color ="gray"/>
</Filter>

<Filter>
<FilterTitle>Taille</FilterTitle>
<FilterSize>
<FilterSizeOption> XS</FilterSizeOption>
<FilterSizeOption> S</FilterSizeOption>
<FilterSizeOption> M</FilterSizeOption>
<FilterSizeOption> L</FilterSizeOption>
<FilterSizeOption> XL</FilterSizeOption>
</FilterSize>
</Filter>
</FilterContainer>

<AddContainer>
<AmountContainer>
<Remove/>
<Amount>1</Amount>
<Add/>

</AmountContainer>
<Button> Ajouter au panier</Button>
</AddContainer>


</InfoContainer>
</Wrapper>
<Letter/>
<Footer/>
  </Container>
  )
}

export default Product
