import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../../assets/css/checkBox.css'
export default function CheckboxLabels(props) {

  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.onchange(checked)
  
  };

  return (
    
    <FormGroup>
      <FormControlLabel
        className='abc'
        control={<Checkbox />}
        label={props.label}
        checked={checked}
        onChange={handleChange}
      />
    </FormGroup>
  );
}
