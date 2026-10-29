/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly APP_VERSION: string;
    /** Set by the Tauri CLI, only present in the desktop build */
    readonly TAURI_ENV_PLATFORM?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}