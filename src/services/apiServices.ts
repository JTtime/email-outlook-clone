// import React, { useEffect } from "react";

import axios from "axios";

const configURL = "https://flipkart-email-mock.vercel.app"

export class emailServices {
    private static baseURL = configURL

    public static getEmailList = () => {
        let url: string = this.baseURL;
    
        return axios.get(url);
      };

      public static getEmailDataWithPageNumber = (pageNumber: string) => {
        let url: string = `${this.baseURL}/?page=${pageNumber}`;
    
        return axios.get(url);
      };

      public static getEmailBody = (id: string) => {
        let url: string = `${this.baseURL}/?id=${id}`;
    
        return axios.get(url);
      };


}