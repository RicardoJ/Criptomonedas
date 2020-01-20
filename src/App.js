import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import axios from 'axios';

const Container = styled.div`
max-width: 900px;
margin: 0 auto;
@media(min-width:992px){
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`;
const Image = styled.img`
max-width: 100%;
margin-top: 5rem;
`;
const Heading = styled.h1`
font-family: 'Bebas Neue' , cursive;
color: #FFF;
text-align: left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color : #66A2FE;
  display: block;
}
`;
function App() {
  const [money , setMoney] = useState('');
  const [cryptoCurrency , setCryptoCurrency] = useState('');

  useEffect(()=>{
  const quoteCurrency = async ()=>{
    if(money === '') return;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${money}`;
    const {data} = await axios.get(url);
    console.log(data.DISPLAY[cryptoCurrency][money])
  }
  quoteCurrency();

  }, [money , cryptoCurrency])

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza criptomonedas</Heading>
        <Form
        setMoney = {setMoney}
        setCryptoCurrency = {setCryptoCurrency}
        />
      </div>
    </Container>
  );
}

export default App;
