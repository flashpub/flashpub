import { FPCommunity, FPConfig } from 'src/flashpub-types';

import LocalConfig from '../../../flashpub.config';
const Communities: FPCommunity[] = [
  {
    symbol: 'dx',
    name: 'outbreak',
    longName: 'Outbreak',
    url: 'https://outbreak.flashpub.io',
    id: '962d873c-e0b6-4231-9ee2-80c792d36016',
  },
  {
    symbol: 'cl',
    name: 'clinic',
    longName: 'Clinic',
    url: 'https://clinic.flashpub.io',
    id: '9f39c304-9c67-4251-83d9-86f7837c0135',
  },
];

export class ConfigConstructor {
  community = Communities[0];
  communityName = Communities[0].name;
  connection = {
    apiKey: '',
    baseUrl: '',
  };

  constructor() {
    this.ApplyConfig(LocalConfig as Partial<FPConfig>);
  }

  private ApplyConfig(config: Partial<FPConfig>) {
    const community = Communities.find((c) => {
      if (typeof window !== 'undefined') {
        if (window.location.pathname.includes(c.name)) return true;
        if (config.communityName === c.name) return true;
      }
    });
    if (community) {
      this.community = community;
      this.communityName = community.name;
    }
    if (config.connection) {
      const { apiKey, baseUrl } = config.connection;
      if (apiKey) this.connection.apiKey = apiKey;
      if (baseUrl) this.connection.baseUrl = baseUrl;
    }
  }
}

const Config = new ConfigConstructor();

export { Config };
