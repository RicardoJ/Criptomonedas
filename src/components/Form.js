import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoney from '../hooks/useMoney';
import useCryptoCurrency from '../hooks/useCryptoCurrency';
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
const Form = () => {
    const [listCrypto, setListCrypto] = useState([]);

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
    return (
        <form>
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
