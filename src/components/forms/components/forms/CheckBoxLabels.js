import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../../assets/css/checkBox.css'
export default function CheckboxLabels(props) {
  return (
    <FormGroup>
      <FormControlLabel className='abc' control={<Checkbox defaultChecked />} label={props.label} />
    </FormGroup>
  );
}
