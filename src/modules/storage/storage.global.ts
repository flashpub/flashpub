import { proxy, useSnapshot, subscribe } from 'valtio';

import type { StorageDefinition } from './storage.types';

const stateStatus = <T = unknown>(
  data: T,
): StorageDefinition.StateStatus<T> => ({
  data,
  status: 'idle',
});
