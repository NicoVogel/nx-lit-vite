interface ImportMetaEnv {
  readonly VERSION: string;
  readonly COMMIT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
