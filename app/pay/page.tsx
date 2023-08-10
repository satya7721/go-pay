"use client"
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TextField from '@mui/material/TextField';
import styled from '@mui/material/styles/styled'

const AmountInput = styled(TextField)({
    backgroundColor: '#FFFF',
    width: '100%',
    borderRadius: '2vw',
    fontSize: '18px',
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: 'none',
            bgcolor: 'white'
        },
    },
    '& .MuiOutlinedInput-input': {
        textAlign:'center',
        fontSize: '20px',
        fontWeight: 'bolder',
        letterSpacing: '2px'
    }
})

const PayScreen = () => {
    return (
        <div className="scan-wrapper">
            <div className="scan-header">
                <div className="input-wrapper">
                    <span>
                        Amount to Transfer
                    </span>
                    <AmountInput />
                </div>
            </div>


            <div className="scan-warning">
                <div className="pay-btn-wrapper">
                    <div className="pay-btn-icon">
                        <CurrencyRupeeIcon />
                    </div>
                    <div className="pay-btn-text">
                        Pay
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayScreen;