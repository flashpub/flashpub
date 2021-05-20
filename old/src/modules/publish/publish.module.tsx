import { Pub } from 'src/flashpub-types';
import { proxy } from 'valtio';

import { ConfigConstructor } from './flashpub.config';

export class PublishModule extends ConfigConstructor {
  Draft = proxy<Pub | undefined>(undefined);
}
