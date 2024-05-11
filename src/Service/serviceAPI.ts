import axios, { AxiosResponse } from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL;


export const apiGet = async (rota: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.get(rota);

        return response; 
    
    } catch (error: any) {
        
        return error;
    }
};

export const apiPost = async (rota: string, data: any): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.post(rota, data)

        return response;
    } catch (error: any) {

        return error;
    }
};

export const apiPut = async (rota: string, data: any): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.put(rota, data)

        return response;
    } catch (error: any) {

        return error;
    }
};

export const apiDelete = async (rota: string): Promise<AxiosResponse> => {
    try {
        const response: AxiosResponse = await axios.delete(rota)

        return response;
    } catch (error: any){
        
        return error;
    }
};