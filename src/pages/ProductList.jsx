import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoncement from '../components/Annoncement'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Letter from '../components/Letter'

const Container = styled.div`

`
const FilterContainer = styled.div`
display:flex;
justify-content: space-between;
`
const Filter = styled.div`
margin:20px;`
const Title = styled.h1` 
margin:20px`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 10px;

`
const Select = styled.select`
padding: 10 px;
margin-left: 20px;
`
const Option = styled.option``

const ProductList = () => {
  return (
   <Container>
   <Navbar/>
<Annoncement/>

<Title> Hiver Collection</Title>
<FilterContainer>
    <Filter> <FilterText> Filtre Produits:</FilterText>
    <Select>
    <Option disabled selected> Couleur</Option>
    <Option> Black</Option>
    <Option> Pink</Option>
    <Option> Red</Option>
    <Option>Blue</Option>
    <Option> Yellow</Option>
    </Select> 
    <Select>
    <Option disabled selected> Taille</Option>
    <Option> XS</Option>
    <Option> S </Option>
    <Option> M </Option>
    <Option> L </Option>
    <Option> XL </Option>
    </Select>
    </Filter>
    <Filter> <FilterText> Ordre trie produit:</FilterText>
    <Select>
    <Option  selected> Nouveau</Option>
    <Option> Prix (asc)</Option>
    <Option> Prix(desc)</Option>
   
    </Select>
    
    
    </Filter>
</FilterContainer>
<Products/>
<Letter/>
<Footer/>


   </Container>
  )
}

export default ProductList
