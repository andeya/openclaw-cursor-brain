declare module "openclaw/plugin-sdk" {
  export type PluginLogger = {
    info: (...args: unknown[]) => void;
    warn: (...args: unknown[]) => void;
    error: (...args: unknown[]) => void;
    debug?: (...args: unknown[]) => void;
  };

  export type OpenClawPluginApi = {
    config: any;
    pluginConfig?: Record<string, unknown>;
    logger: PluginLogger;
    resolvePath: (input: string) => string;
    registerCli: (fn: (ctx: any) => void, opts?: any) => void;
    runtime?: {
      config?: {
        writeConfigFile?: (patch: any) => Promise<void>;
      };
    };
    [key: string]: any;
  };

  export function emptyPluginConfigSchema(): Record<string, unknown>;
}
