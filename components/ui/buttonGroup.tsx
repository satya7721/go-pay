import React from 'react'
import Button from '@mui/material/Button'
import styled from '@mui/material/styles/styled'
import QrCodeIcon from '@mui/icons-material/QrCode';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoneyIcon from '@mui/icons-material/Money';
import Link from 'next/link';
const EachButton = styled(Button)({
    backgroundColor: '#3B3B98 !important',
    color: '#FFFF',
    minWidth: '6vh !important',
    minHeight: '6vh !important',
})
const ButtonGroupCustom = () => {
    return (
        <div className='btn-group'>
            <Link href='/scan'>
            <div className="btn-wrapper">
                <EachButton>
                    <QrCodeIcon sx={{
                        fontSize: '30px'
                    }} />
                </EachButton>
                Scan
            </div></Link>
            <div className="btn-wrapper">
                <EachButton>
                    <AccountBalanceIcon sx={{
                        fontSize: '30px'
                    }} />
                </EachButton>
                Balance
            </div>
            <div className="btn-wrapper">
                <EachButton>
                    <PhoneIphoneIcon sx={{
                        fontSize: '30px'
                    }} />
                </EachButton>
                G Pay
            </div>
            <div className="btn-wrapper">
                <EachButton>
                    <MoneyIcon sx={{
                        fontSize: '30px'
                    }} />
                </EachButton>
                Details
            </div>
        </div>
    )
}

export default ButtonGroupCustom