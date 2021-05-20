export declare namespace StorageDefinition {
  interface StateStatus<T = unknown> {
    data: T;
    status: 'idle' | 'loading' | 'success' | 'error';
  }
}
