import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CropFreeIcon from '@mui/icons-material/CropFree';

const ScanScreen = () => {
  return (
    <div className="scan-wrapper">
      <div className="scan-header">
        <div className="scan-camera">
          <CropFreeIcon sx={{
            color:'#f9e6ff',
            fontSize : '25vh'
          }} />
        </div>
      </div>
      <div className="scan-progress">
        <LinearProgress />
      </div>

      <div className="scan-warning">
        <div className="scan-warning-text">
          Allow Camera access from browser !
        </div>
      </div>
    </div>
  )
}

export default ScanScreen