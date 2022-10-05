export interface IHttpClient {
  get<T>(path: string): Promise<T>;
  post<T>(path: string, body: object): Promise<T>;
  put<T>(path: string, body: object): Promise<T>;
  patch<T>(path: string, body: object): Promise<T>;
  delete<T>(path: string): Promise<T>;
}
