import axios, { type AxiosRequestConfig } from "axios";
import { useState, useEffect, useCallback, useRef } from "react";
import Cookies from "js-cookie";

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/`,
});

// Função para identificar o status do erro
const getErrorStatus = (error: unknown): number => {
  if (axios.isAxiosError(error)) {
    return error.response?.status ?? 500;
  }

  return 500;
};

// POST
export const RequestPost = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null);

  const UsePost = async (value: P, config?: AxiosRequestConfig) => {
    setData(null);
    setLoading(true);
    setError(null);

    try {
      const response = await AxiosInstance<T>({
        ...config,
        method: "POST",
        url: endpoint,
        data: value,
        headers: {
          "Content-Type": "application/json",
          ...config?.headers,
        },
      });

      setData(response.data);
      console.log(response.data);

      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (err: unknown) {
      const status = getErrorStatus(err);

      console.log("ERRO:", err);
      setError(status);

      return {
        success: false,
        data: null,
        error: status,
      };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, UsePost };
};

// GET
export const RequestGet = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null);

  // Guarda a configuração mais recente
  const configRef = useRef(config);
  configRef.current = config;

  const UseGet = useCallback(async () => {
    setData(null);
    setLoading(true);
    setError(null);

    const token = Cookies.get("authorization");
    const currentConfig = configRef.current;

    try {
      const response = await AxiosInstance<T>({
        ...currentConfig,
        method: "GET",
        url: endpoint,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          ...currentConfig?.headers,
        },
      });

      setData(response.data);
      console.log(response.data);
    } catch (err: unknown) {
      const status = getErrorStatus(err);

      setError(status);
      console.log("ERRO:", err);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    void UseGet();
  }, [UseGet]);

  return { data, loading, error, UseGet };
};

// PUT
export const RequestPut = <T, P>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<number | null>(null);

  const UsePut = async (value: P, config?: AxiosRequestConfig) => {
    setData(null);
    setLoading(true);
    setError(null);

    const token = Cookies.get("authorization");

    try {
      const response = await AxiosInstance<T>({
        ...config,
        method: "PUT",
        data: value,
        url: endpoint,
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
          ...config?.headers,
        },
      });

      setData(response.data);
      console.log(response.data);

      return {
        success: true,
        data: response.data,
        error: null,
      };
    } catch (err: unknown) {
      const status = getErrorStatus(err);

      console.log("ERRO:", err);
      setError(status);

      return {
        success: false,
        data: null,
        error: status,
      };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, UsePut };
};
