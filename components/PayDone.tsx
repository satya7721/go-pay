import React, { useState } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface PaymentSuccessProps {
  open: boolean;
  onClose: () => void;
}

const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ open, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      autoHideDuration={3000} // Adjust the duration as needed
      onClose={onClose}
    >
      <SnackbarContent
        style={{ backgroundColor: '#4caf50', color: 'white' }} // Green color for success
        message={
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircle style={{ marginRight: '8px' }} />
            Payment Successful
          </span>
        }
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            {/* You can add a close icon here if needed */}
          </IconButton>
        }
      />
    </Snackbar>
  );
};

export default PaymentSuccess;
 



