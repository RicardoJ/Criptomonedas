import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import image from './cryptomonedas.png';
import Form from './components/Form';
import Quote from './components/Quote';
import axios from 'axios';
import Spinner from './components/Spinner';

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
  const [money, setMoney] = useState('');
  const [cryptoCurrency, setCryptoCurrency] = useState('');
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const quoteCurrency = async () => {
      if (money === '') return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${money}`;
      const { data } = await axios.get(url);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setResult(data.DISPLAY[cryptoCurrency][money])
      }, 3000)

    }
    quoteCurrency();

  }, [money, cryptoCurrency])

  const component = (loading) ? <Spinner /> : <Quote result={result} />
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
          setMoney={setMoney}
          setCryptoCurrency={setCryptoCurrency}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
