declare module "openclaw/plugin-sdk" {
  export interface PluginLogger {
    info(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
  }

  export interface OpenClawPluginApi {
    config: Record<string, any>;
    pluginConfig: Record<string, unknown> | undefined;
    logger: PluginLogger;
    runtime: {
      config?: {
        current(): Record<string, any>;
        mutateConfigFile(params: {
          afterWrite?: { mode: "auto" | "none" };
          mutate: (draft: Record<string, any>, context?: unknown) => unknown;
        }): Promise<unknown>;
        replaceConfigFile(params: {
          nextConfig: Record<string, any>;
          afterWrite?: { mode: "auto" | "none" };
        }): Promise<unknown>;
        /** @deprecated Use mutateConfigFile or replaceConfigFile */
        writeConfigFile?(patch: Record<string, any>): Promise<void>;
      };
    };
    resolvePath(rel: string): string;
    registerCli(
      handler: (ctx: { program: any }) => void,
      opts?: { commands?: string[] },
    ): void;
    registerService?(service: {
      id: string;
      start: (ctx: {
        config: Record<string, any>;
        workspaceDir?: string;
        logger: PluginLogger;
      }) => void | Promise<void>;
      stop?: (ctx: {
        config: Record<string, any>;
        workspaceDir?: string;
        logger: PluginLogger;
      }) => void | Promise<void>;
    }): void;
    registrationMode?: string;
  }

  export function emptyPluginConfigSchema(): Record<string, unknown>;
}
