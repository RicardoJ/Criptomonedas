import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoney from '../hooks/useMoney';
import useCryptoCurrency from '../hooks/useCryptoCurrency';
import Error from './Error';
import axios from 'axios';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`
const Form = ({setMoney, setCryptoCurrency}) => {
    const [listCrypto, setListCrypto] = useState([]);
    const [error, setError] = useState(false);

    const CURRENCY = [
        { id: 'COL', name: 'Peso Colombiano' },
        { id: 'USD', name: 'Dolar Estados Unidos' },
        { id: 'MXN', name: 'Peso Mexicano' },
        { id: 'EUR', name: 'Euro' },
        { id: 'GBP', name: 'Libra Esterlina' }
    ]
    const [money, SelectMoney] = useMoney('Elige la moneda', '', CURRENCY);
    const [crypto, SelectCrypto] = useCryptoCurrency('Elige Criptomoneda', '', listCrypto);

    useEffect(() => {
        const queryAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const { data } = await axios.get(url);
            setListCrypto(data.Data);
        }
        queryAPI();
    }, []);
    const quoteCurrency = e =>{
        e.preventDefault();
        if (money === '' || crypto === '') {
            setError(true);
            return;
        }
        setError(false);
        setMoney(money);
        setCryptoCurrency(crypto);
    }

    return (
        <form
        onSubmit ={quoteCurrency}
        >
            {error ? <Error messageError = 'Los campos son obligatorios' /> : null}
            <SelectMoney />
            <SelectCrypto />
            <Button
                type="submit"
                value="calcular"
            />
        </form>
    );
}

export default Form;
