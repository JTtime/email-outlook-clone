'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { emailServices } from '@/services/apiServices';
import styles from '../styles/email.module.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Email from '@/components/EmailComponent';
import { EmailData } from '@/types';


const EmailList = () => {
    const router = useRouter();
    const [emailData, setEmailData] = useState<EmailData[]>([]);
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        getEmailList()
    }, [])

    const getEmailList = async () => {
        try {
            const response = await emailServices.getEmailDataWithPageNumber(pageNumber.toString())
            if (response?.status === 200) {
                setEmailData(response?.data?.list)

            } else {
                toast.error('Something went wrong 😥')
            }
        } catch (error) {
            console.error('error fetching email List', error)
        }
    }

    const handleEmailClick = (emailData: any) => {
        router.push(`/emails/${emailData.id}?subject=${encodeURIComponent(emailData.subject)}&name=${encodeURIComponent(emailData.from.name)}&formattedDate=${encodeURIComponent(emailData.date)}&isFavorite=${emailData.isFavorite}`);
    };


    return (
        <div>
            <div className={styles.emailListContainer}>
                {emailData.map((email) => (
                    <Email key={email.id} emailData={email} onSelectEmail={handleEmailClick} />
                ))}
            </div>
            <ToastContainer />
        </div>
    )
}

export default EmailList