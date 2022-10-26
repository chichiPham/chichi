import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../../assets/css/checkBox.css'

export default function CheckboxLabels(props) {
  const handlechange=(e)=>{
    console.log('checked :',e.target.checked);
    props.onChange(props.name, e.target.checked)
  }
  return (
    <FormGroup className='form-checkbox'>
      <FormControlLabel
        className='checkbox-label'
        control={<Checkbox  checked={props.checked} />}
        label={props.label} 
        name={props.name}
        onChange={handlechange}
        />
       
    </FormGroup>
  );
}
