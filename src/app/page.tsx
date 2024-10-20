'use client'
import React, { useState, useEffect } from 'react';
import HomePage from "@/components/HomePage";
import { emailServices } from '@/services/apiServices';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
  const [emailData, setEmailData] = useState([])
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


  return (
    <div>
      <HomePage />
      <ToastContainer />
    </div>
  );
}
