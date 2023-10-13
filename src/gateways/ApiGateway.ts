import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export class ApiGateway {
   static async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
      return await axios.get(url, config);
   }
}
