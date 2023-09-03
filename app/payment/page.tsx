"use client"
import { Button, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

const PayButton = styled(Button)({
    backgroundColor: '#0e153a !important',
    color: "#fff",
    fontWeight: "bold",
    padding: '10px',
    width: '50vw'
})

const CustomTextField = styled(TextField)({
    width: '80%',
    marginTop: '20px',
    padding: '5x'
})
export default function MakePayment() {
    return (
        <main className="pay-main">
            <div className="pay-first-sec">
                <div className="pay-header">
                    <IconButton sx={{position:'absolute'}}>
                        <KeyboardBackspaceIcon sx={{
                            fontSize: '35px'
                        }} />
                    </IconButton>
                    <div className="pay-header-text">
                        <h3>
                            Pay
                        </h3>
                    </div>

                </div>
                <div className="pay-card">
                    <div className="pay-user-info">
                        <Avatar>df</Avatar>
                        <div className="pay-info-wrapper">
                            <h4>Satyam Khande..</h4>
                            <h6>satyamkhandekar77..</h6>
                        </div>
                    </div>
                    <div className="pay-input-wrapper">
                        <CustomTextField id="standard-basic" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <span style={{
                                        fontSize: "20px",
                                        fontWeight: 'bold',
                                        color: "#ffff"
                                    }}>
                                        ₹
                                    </span>
                                </InputAdornment>
                            ),
                        }} variant="outlined" placeholder="Amount" />
                        <CustomTextField placeholder="message" id="standard-basic" variant="outlined" />
                    </div>
                </div>

            </div>
            <div className="pay-second-sec">
                <PayButton >PROCCED TO PAY</PayButton>
            </div>
        </main>
    )
}
