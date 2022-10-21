import React from 'react'
import Search  from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import styled from 'styled-components'




const Container = styled.div`
height:60px;`


const Left = styled.div`
flex:1;
display: flex;
align-items : center`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Language = styled.span`
font-size: 14 px;
cursor : pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items : center;
margin-left : 25px;
padding: 5px
`
const Input = styled.input`
border:none`

const Right = styled.div`
flex:1;
display:flex;
align-items : center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size : 14px;
cursor : pointer;
margin-left:25px
`
const Center = styled.div`
flex:1;
text-align: center`;

const Logo = styled.h1`
font-weight: bold`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language> FR</Language>
        <SearchContainer>
        <Input />
          <Search style ={{color :"gray" , fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center> <Logo>YAS SHOP.</Logo></Center>
        <Right>
          <MenuItem> S'inscrire </MenuItem>
          <MenuItem>Se connecter</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="primary">
          <ShoppingCartRounded/>
    </Badge></MenuItem>
        </Right>
        </Wrapper>

    </Container>
  )
}




export default Navbar