import {environment} from "./enviroments/enviroments";

export const API_URL: string = environment.apiUrl;

export interface Env {
  production: boolean;
  name: string;
  apiUrl: string;
  sentryUrl: string;
  facebookAuthId: string;
  googleAuthId: string;
  sentryRelease?: string;
  googleAnalyticsTrackingCode: string;
}
