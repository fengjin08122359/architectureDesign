import {
  HttpInstance,
  HttpInstanceParam,
  AxiosOpt,
  AxiosRequestConfig,
  AxiosResponse,
} from "../src";

test("HttpInstance fetch", () => {
  class Http extends HttpInstance {
    constructor(opt: HttpInstanceParam) {
      super(opt);
    }
    convertRequest(config: AxiosRequestConfig) {
      return config;
    }
    convertResponse(config: AxiosResponse<any>) {
      return config;
    }
    handleError(
      error: any,
      reject: { (reason?: any): void; (arg0: any): void },
      opt: AxiosOpt
    ) {
      reject("error");
    }
    handleSuccess(
      reponse: AxiosResponse<any>,
      resolve: { (value?: unknown): void; (arg0: any): void },
      opt: AxiosOpt
    ) {
      resolve(reponse);
    }
  }
  var http = new Http({ baseURL: "http:127.0.0.1" });
  http
    .create({ url: "/api", method: "GET" })
    .then((res) => {})
    .catch((res) => {
      expect(res).toEqual("error");
    });
});
