declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    APP_VERSION: string;
    BUILD_DATE: string;
  }
}
