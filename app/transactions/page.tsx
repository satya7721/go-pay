'use client'
import React from 'react';
import { Typography, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material';
import { Payment, Receipt } from '@mui/icons-material';

function page() {
    const transactions = [
        {
            name: 'Alice Johnson',
            amount: 100.0,
            time: '2023-09-03 10:15 AM',
            type: 'payed',
        },
        {
            name: 'Bob Smith',
            amount: 50.0,
            time: '2023-09-03 11:30 AM',
            type: 'received',
        },
        {
            name: 'Charlie Brown',
            amount: 75.0,
            time: '2023-09-03 1:45 PM',
            type: 'payed',
        },
        {
            name: 'David Clark',
            amount: 120.0,
            time: '2023-09-03 3:00 PM',
            type: 'received',
        },
        {
            name: 'Eva Davis',
            amount: 60.0,
            time: '2023-09-03 4:15 PM',
            type: 'payed',
        },
        {
            name: 'Frank Wilson',
            amount: 90.0,
            time: '2023-09-03 5:30 PM',
            type: 'received',
        },
        {
            name: 'Frank Wilson',
            amount: 90.0,
            time: '2023-09-03 5:30 PM',
            type: 'received',
        },
    ];

    return (
        <div>
            <div className="history-header">
                <Typography variant="h5" gutterBottom padding={"10px"}>
                    Transaction List
                </Typography>
            </div>
            <List sx={{
                padding: '10px'
            }}>
                <div className="history-list">
                    {transactions.map((transaction, index) => (
                        <ListItem
                            key={index}
                            style={{
                                backgroundColor: transaction.type === 'payed' ? '#e2f3f5' : '#22d1ee',
                                marginBottom: '5px'
                            }}
                        >
                            <ListItemIcon style={{ minWidth: 40 }}>
                                {transaction.type === 'payed' ? <Payment color="primary" /> : <Receipt color="secondary" />}
                            </ListItemIcon>
                            <ListItemText
                                primary={transaction.name}
                                secondary={
                                    <>
                                        <Typography component="span" variant="body2" color="textPrimary">
                                            Amount: ${transaction.amount}
                                        </Typography>
                                        <br />

                                    </>
                                }

                            />
                            <Typography component="span" variant="body2" color="textPrimary">
                                {transaction.time}
                            </Typography>
                        </ListItem>
                    ))}
                </div>
            </List>
         
        </div>
    )
}

export default page
