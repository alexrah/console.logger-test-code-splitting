import type {tEnv} from "@alexrah/logger";

export {}
declare global{
  interface Window {
    env: Partial<tEnv>
  }
}