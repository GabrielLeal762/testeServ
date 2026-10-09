import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import Cookies from 'js-cookie';
import { useEffect } from "react";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
});


export const RequestPost = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const UsePost = async (value: P, config?: AxiosRequestConfig) => {
    setData(null);
    setLoading(true);
    setError(null);

   
    try {
      const response = await AxiosInstance({
        ...config,
         method: "POST",
        url: endpoint,
        data: value,
        headers: { "Content-Type": "application/json", ...config?.headers }
        
      });
      setData(response.data);
      console.log(response.data)
      return {
            success: true,
            data: response.data,
            error: null,
        }
    } catch (error: any) {
       console.log("ERRO:", error.response?.data)
      setError(error.response?.status || 500);
      return {
            success: false,
            data:null,
            error: error.response?.status
        }
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, UsePost };
};




export const RequestGet = <T>(endpoint: string,config?: AxiosRequestConfig) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const UseGet = async () => {
    setData(null);
    setLoading(true);
    setError(null);

const token = Cookies.get("authorization")
 console.log("TOKEN ENVIADO:", token)
console.log("TOKEN:", token)
console.log("HEADER:",token)
    try {
      const response = await AxiosInstance({
        ...config,
         method: "GET",
        url: endpoint,
        headers:
         { Authorization:token,
          "Content-Type": "application/json", ...config?.headers }
        
      });
      setData(response.data);
      console.log(response.data)
       
    } catch (error: any) {
     console.log("TOKEN:", Cookies.get("authorization"))
      setError(error.response?.status || 500);
           } finally {
      setLoading(false);
    }


    
  };

  useEffect(() => {
    UseGet()
  }, [endpoint])
  return { data, loading, error, UseGet };
};



export const RequestPut = <T,P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const UsePut = async (value: P, config?: AxiosRequestConfig) => {
    setData(null);
    setLoading(true);
    setError(null);

const token = Cookies.get("authorization")
 console.log("TOKEN ENVIADO:", token)
console.log("TOKEN:", token)
console.log("HEADER:",token)
    try {
      const response = await AxiosInstance({
        ...config,
         method: "PUT",
         data:value,
        url: endpoint,
        headers:
         { Authorization:token,
          "Content-Type": "application/json", ...config?.headers }
        
      });
      setData(response.data);
      console.log(response.data)
       
    } catch (error: any) {
     console.log("TOKEN:", Cookies.get("authorization"))
      setError(error.response?.status || 500);
           } finally {
      setLoading(false);
    }


    
  };

  
  return { data, loading, error, UsePut };
};

