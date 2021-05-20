export declare namespace CommunityType {
  interface ContentType {
    order: number;
    info: ContentInfo;
    claim: ContentClaim;
    quickReviews: string[];
    figureRequired: boolean;
    contentTypeLabel: string;
    defaultConditions: DefaultCondition[];
    reviewPeriodEnabled: boolean;
    articleType: 'micropub' | 'microreview';
  }
  interface ContentInfo {
    title: string;
    diagram: string;
    description: string;
  }
  interface ContentClaimItem {
    label: string;
    filter: string;
    newTermAllowed: boolean;
    setFilterAsItem: boolean;
  }
  interface DefaultCondition {
    name: string;
    type: any;
  }
  interface ContentClaim {
    item1: ContentClaimItem;
    item2: ContentClaimItem | null;
    relationship: Relationship[] | null;
    type: 'single' | 'relational' | null;
  }
  interface Metrics {
    userCount: number;
    pubCount: number;
    subCommunityCount: number;
  }
}
