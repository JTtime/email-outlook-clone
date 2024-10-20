// components/EmailBody.tsx
import React from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '../styles/email.module.css';
import { EmailBodyType } from '@/types';
import { Avatar } from '@mui/material';

interface EmailBodyProps {
    email?: EmailBodyType;
}

const EmailBody: React.FC<EmailBodyProps> = ({ email }) => {
    const searchParams = useSearchParams();

    // Extracting data from the URL
    const subject = searchParams.get('subject') || '';
    const name = searchParams.get('name') || '';
    const formattedDate = searchParams.get('formattedDate') || '';
    const isFavorite = searchParams.get('isFavorite') === 'true'; // Convert string to boolean

    // Format the date
    const date = new Date(Number(formattedDate)).toLocaleString();

    return (
        <div className={styles.emailBodyContainer}>
            <div>
                <Avatar
                    alt={name}
                    sx={{ width: 48, height: 48, marginRight: '16px', backgroundColor: '#E54065' }}
                >{name[0]}</Avatar>
            </div>

            <div className={styles.header}>
                <h2 className={styles.subject}>{subject}</h2>
                <div className={styles.meta}>
                    <span className={styles.date}>{date}</span>
                    <span className={styles.favorite}>{isFavorite ? '⭐ Favorite' : 'Not Favorite'}</span>
                </div>
            </div>
            {email?.body?.length ? (<><div
                className={styles.emailBodyContent}
                dangerouslySetInnerHTML={{ __html: email?.body }}
            /></>) : ""}
        </div>
    );
};

export default EmailBody;
