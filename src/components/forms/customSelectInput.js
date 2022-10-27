import React from 'react';


const BasicSelect = (props) => {

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
                {props.data.map((item, index) =>
                    <option key={item.id} value={item.value} >{item.name} </option>)}




            </select>
        </div>
    );
};

export default BasicSelect;