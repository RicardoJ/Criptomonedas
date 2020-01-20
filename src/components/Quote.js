import React from 'react';
import styled from '@emotion/styled';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`
const Quote = ({ result }) => {
    if (Object.keys(result).length === 0) return null;
    console.log(result)
    return (
        <ResultDiv>
            <Price>El precio es: <span>{result.PRICE}</span></Price>
            <Info>El precio más alto del día: <span>{result.HIGHDAY}</span></Info>
            <Info>El precio más bajo del día: <span>{result.LOWDAY}</span></Info>
            <Info>Variacíon últimas 24hr: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualizacíon: <span>{result.LASTUPDATE}</span></Info>
        </ResultDiv>
    );
}

export default Quote;