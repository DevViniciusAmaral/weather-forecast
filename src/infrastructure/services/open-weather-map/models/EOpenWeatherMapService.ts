import { AxiosPromise } from "axios";

// REQUEST
import { IOneCallRequest } from "./IOneCallRequest";

// RESPONSE
import { IOneCallResponse } from "./IOneCallResponse";

export interface EOpenWeatherMapService {
  oneCall: (values: IOneCallRequest) => Promise<AxiosPromise<IOneCallResponse>>;
}
