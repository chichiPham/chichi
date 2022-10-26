import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBa() {
  const now = 40;// gia tri tai len tu database
  return <div style={{ display: 'block',
  padding: 30 }}>
<ProgressBar variant="success" now={now} label={`${now}%`} />
</div>;


}

export default ProgressBa;