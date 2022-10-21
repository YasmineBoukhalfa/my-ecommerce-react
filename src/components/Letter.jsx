
import React from 'react'
import styled from 'styled-components';
import SendOutlined from '@mui/icons-material/SendOutlined';



const Container = styled.div`
height:60vh;
background-color: #e4d5d8;
display:flex;
align-items:center;
justify-content: center;
flex-direction: column;
`;


const Title = styled.h1`
font-size:30px;
margin-bottom:25px;
`;

const Desc = styled.div`
font-size:11px;
margin-bottom:10px`;

const InputContainer = styled.div `
width:50%;
height:40px;
background-color:white;
display: flex;
justify-content:space-between;
border:1px solid lightgray`;

const Input = styled.input`
border:none;
flex:8 `;

const Buttton = styled.button `
border:none ;
flex:1;
background-color: #600836;
color: white;
cursor: pointer;
`;


const Letter = () => {
  return (
 <Container>
    <Title>
    ABONNEZ-VOUS ET RECEVEZ -10% DE REDUCTION !*
    </Title>
    <Desc> *Les -10% sont uniquement valables pour les nouveaux abonnés. 
    En vous abonnant, vous acceptez de recevoir les communications marketing de YAS SHOP par email
    </Desc>
    <InputContainer>
    <Input placeholder='Votre email'/>
    <Buttton>
        <SendOutlined/>
    </Buttton>
    </InputContainer>
 </Container>
  )
}

export default Letter