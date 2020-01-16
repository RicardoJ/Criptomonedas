import React, { Fragment, useState } from 'react';

const useMoney = () => {

    const [state ,setState] = useState('');

    const Select = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value = "MXN" >Peso Mexicano</option>
            </select>
        </Fragment>
    );

    return [state, Select , setState];
}
 
export default useMoney;