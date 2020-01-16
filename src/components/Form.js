import React from 'react';
import styled from '@emotion/styled'
import useMoney from '../hooks/useMoney';

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
    const [money , SelectMoney , setMoney] = useMoney();
    return (
        <form>
            <SelectMoney/>
            <Button
                type="submit"
                value="calcular"
            />
        </form>
    );
}

export default Form;
