import type { CommunityType } from './community.types';

class CommunityData {
  name: string;
  dictionaryId: string;
  createdOn: number;
  metrics: CommunityType.Metrics;
  contentTypes: {
    [key: string]: CommunityType.ContentType;
  };
  loadingTaglines: string[];
  topSubCommunities: string[];
  quickReviewTemplates: string[];

  constructor(data?: CommunityData) {
    this.name = data.name;
    this.metrics = data.metrics;
    this.createdOn = data.createdOn;
    this.dictionaryId = data.dictionaryId;
    this.contentTypes = data.contentTypes;
    this.loadingTaglines = data.loadingTaglines;
    this.topSubCommunities = data.topSubCommunities;
    this.quickReviewTemplates = data.quickReviewTemplates;
  }
}

export class CommunityState {
  Data: CommunityData;
  Status: 'idle' | 'loading' | 'success' | 'error';

  constructor(
    data?: CommunityState['Data'],
    status?: CommunityState['Status'],
  ) {
    this.Data = new CommunityData(data);
    this.Status = status || 'idle';
  }
}
