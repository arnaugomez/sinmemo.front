import { AffixProps } from "@mantine/core";
import { CommonModule } from "../commonModule";
import { IEnvVars } from "../interfaces/IEnvVars";
import { IHttpClient } from "../interfaces/IHttpClient";
import { envVars } from "./EnvVars";
import axios, { AxiosInstance } from "axios";

class HttpClient implements IHttpClient {
  private instance: AxiosInstance;
  constructor(envVars: IEnvVars) {
    this.instance = axios.create({ baseURL: envVars.baseUrl });
  }

  async get<T>(path: string): Promise<T> {
    const response = await this.instance.get<T>(path);
    return response.data;
  }
  async post<T>(path: string, body: object): Promise<T> {
    const response = await this.instance.post<T>(path, body);
    return response.data;
  }
  async put<T>(path: string, body: object): Promise<T> {
    const response = await this.instance.put<T>(path, body);
    return response.data;
  }
  async patch<T>(path: string, body: object): Promise<T> {
    const response = await this.instance.patch<T>(path, body);
    return response.data;
  }
  async delete<T>(path: string): Promise<T> {
    const response = await this.instance.delete<T>(path);
    return response.data;
  }
}

export const _httpClient = new HttpClient(envVars);
