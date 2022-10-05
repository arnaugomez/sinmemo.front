import { IHttpClient } from "./interfaces/IHttpClient";

export const CommonModule = {
  IHttpClient: (): Promise<IHttpClient> =>
    import("./services/HttpClient").then((v) => v._httpClient),
};
