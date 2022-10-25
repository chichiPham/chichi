import React from 'react';

const BasicSelect = (props) => {
    // console.log(city);
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
                {props.selectData.map((item, index) =>
                    <option key={index} value={item} >{item} </option>)}




            </select>
        </div>
    );
};

export default BasicSelect;