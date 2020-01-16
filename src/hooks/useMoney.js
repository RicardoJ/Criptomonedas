import React, { Fragment, useState } from 'react';

const useMoney = (label, stateInitial,options) => {

    const [state ,setState] = useState('');

    const Select = () => (
        <Fragment>
            <label>{label}</label>
            <select
            onChange = {e => setState(e.target.value)}
            value = {state}
            >
                <option value = "" >Seleccione</option>
                {options.map(option =>(
                    <option key = {option.id} value = {option.id} >{option.name}</option>
                ))}
            </select>
        </Fragment>
    );

    return [state, Select , setState];
}
 
export default useMoney;