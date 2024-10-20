'use client'
import React, { useEffect, useState } from 'react';
import EmailBody from '../../../components/EmailBody';
import styles from '../../../styles/email.module.css';
import { useParams } from 'next/navigation';
import { emailServices } from '@/services/apiServices';
import { EmailBodyType } from '@/types';
import EmailList from '@/components/EmailList';



const EmailDetail: React.FC = () => {
    const [emailBody, setEmailBody] = useState<EmailBodyType>({id: '', body: ''});
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        if (id) {
            console.log('id', id)
            getEmailBody()
        }
    }, [id]);

    useEffect(() => {
        console.log('emailBody', emailBody)

    }, [emailBody])

    const getEmailBody = async () => {
        try {
            const response = await emailServices.getEmailBody(id)
            if (response?.status === 200) {
                setEmailBody(response?.data)

            }

        } catch (error) {
            console.error('error fething email Body', error)
        }
    }

    return (
        <div className={styles.emailDetailContainer}>
            <aside style={{}}>
                <EmailList />
            </aside>
            <main>
                <EmailBody email={emailBody} />
            </main>

        </div>
    );
};

export default EmailDetail;
