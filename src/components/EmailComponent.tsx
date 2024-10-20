// components/Email.tsx
import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface EmailProps {
    emailData: {
        id: string;
        from: { email: string; name: string; avatarUrl?: string };
        date: number;
        subject: string;
        short_description: string;
        isFavorite?: boolean;
    };
    onSelectEmail: (id: string) => void;
}

const Email: React.FC<EmailProps> = ({ emailData, onSelectEmail }) => {
    const { id, from, subject, short_description, date, isFavorite } = emailData;
    const formattedDate = new Date(date).toLocaleString();

    return (
        <Box
            onClick={()=>onSelectEmail(emailData)}
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '16px',
                borderRadius: '8px',
                backgroundColor: '#F9F9F9', // Background color as per the image
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginBottom: '8px',
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: '#EDEDED', // Hover effect
                },
            }}
        >
            <Avatar
                alt={from.name}
                sx={{ width: 48, height: 48, marginRight: '16px', backgroundColor: '#E54065' }}
            >{from.name[0]}</Avatar>
            <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        From: {from.name} &lt;{from.email}&gt;
                    </Typography>

                </Box>
                <Typography variant="h6" sx={{ marginTop: '4px' }}>
                    Subject:  {subject}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginTop: '4px' }}>
                    {short_description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {formattedDate}
                </Typography>
                {isFavorite && (
                    <Typography variant="caption" color="primary" sx={{ marginTop: '4px' }}>
                        Favorite
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default Email;
