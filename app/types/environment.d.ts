export { }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DB_URI: string;
    }
  }
}