
import styled from 'styled-components'


const Container = styled.div`
  width: 100vw;
  height: 100vh;

background-image:  url(${"https://i.ibb.co/443w7h2/pexels-gustavo-fring-4127641.jpg"});
background-size: cover;
display: flex;
align-items:center;
justify-content: center;
  `;

const Wrapper=styled.div`
width:40%;
padding:20px;
background-color:white`;

const Title= styled.h1`
font-size: 25px;
font-weight:300`;

const Form= styled.form`
display:flex;
flex-wrap:wrap`;
const Input =styled.input`
flex:1;
min-width:45%;
margin:20px 10px 0px 0px`;
const Button =styled.button`
width:30%;
margin-top: 20px;
border:none;
padding :10px 15px;
background-color: pink;
color: white;
font-weight:600;
cursor:pointer`;

const Register = () => {
  return (
    <Container>
<Wrapper>

    <Title> CREATE AN ACCOUNT</Title>
<Form>
<Input placeholder = "name"/>
<Input placeholder = "lastname"/>
<Input placeholder = "username"/>
<Input placeholder = "email"/>
<Input placeholder = "password"/>
<Input placeholder = "Confirm password"/>
<Button>CREATE</Button>
</Form>


</Wrapper>
    </Container>
  )
}

export default Register
