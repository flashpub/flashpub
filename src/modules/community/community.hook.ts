import { useQuery } from 'react-query';

import type { CommunityDefinition } from './community.types';
import { Backend } from '@modules/internal';

const getCommunity = async (community: string) => {
  return Backend.DB.collection('communities')
    .doc(community)
    .get()
    .then((doc) => {
      if (doc.exists) return doc.data() as CommunityDefinition.CommunityProps;
      else return null;
    });
};

export function useCommunityQuery(community: string, run: boolean) {
  return useQuery<CommunityDefinition.CommunityProps, Error>(
    'community',
    () => getCommunity(community),
    { enabled: run },
  );
}
