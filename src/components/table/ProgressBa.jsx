import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBa({value}) {
  return <div style={{ display: 'block',
  padding: 30 }}>
<ProgressBar variant="success" now={value} label={`${value}%`} />
</div>;


}

export default ProgressBa;