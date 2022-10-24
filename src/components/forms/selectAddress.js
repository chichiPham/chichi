import React from 'react';
import { city } from '../../dataFill/data';

const BasicSelect = (props) => {
    console.log(city);
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        props.onChange(event)
    };
    return (
        <div>
            <select
                name={props.name}
                id={props.id}
                value={value}
                onChange={handleChange}
                className={props.className}
            >
                <option >{props.placeholder}</option>
                {city.map((item, index) =>
                    <option key={index} value={item} >{item} </option>)}




            </select>
        </div>
    );
};

export default BasicSelect;