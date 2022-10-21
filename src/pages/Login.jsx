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
width:25%;
padding:20px;
background-color:white`;

const Title= styled.h1`
font-size: 25px;
font-weight:300`;

const Form= styled.form`
display:flex;
flex-direction:column`;

const Input =styled.input`
flex:1;
min-width:45%;
margin:20px 10px 0px 0px;
padding:7px`;

const Button =styled.button`
width:30%;
margin-top: 20px;
border:none;
padding :10px 15px;
background-color: pink;
color: white;
font-weight:600;
cursor:pointer;
margin-bottom:5px`;

const Link = styled.a`
margin:5px 0px;
font-size:11px;
text-decoration:underline;
cursor:pointer`

const Login = () => {
  return (
    <Container>
<Wrapper>

    <Title> SIGN IN</Title>
<Form>

<Input placeholder = "username"/>
<Input placeholder = "password"/>

<Button>LOGIN</Button>
<Link> DO YOU FORGOT YOUR PASSWORD?</Link>
<Link> CREATE A NEW ACCOUNT</Link>
</Form>


</Wrapper>
    </Container>
  )
}

export default Login
