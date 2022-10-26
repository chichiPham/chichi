
import React, { useState } from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
// import { registerLocale, setDefaultLocale } from  "react-datepicker";
// import es from 'date-fns/locale/es';
// registerLocale('es', es)

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



const ExampleDate = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  const handleStartDateChange = (date) => {
    console.log({date});
    setStartDate(date);
    props.onChangeDate(props.name,  date)
  }
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
        // onChange={(date) => setStartDate(date)} 
        selected={ startDate }
        onChange={ handleStartDateChange }
        dateFormat="dd/MM/yyyy"
        className="csdate-picker"
        placeholderText="Moving date"
        //locale="es"
    />
  );
};

export default ExampleDate;
