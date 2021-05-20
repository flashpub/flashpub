export interface StateStatus<T = unknown> {
  data: T;
  redirect: [string, string?] | undefined;
  status: 'idle' | 'loading' | 'success' | 'error';
}

export type CommunitySymbol = 'dx' | 'cl';
export type CommunityName = 'outbreak' | 'clinic';
export type CommunityLongName = 'Outbreak' | 'Clinic';

export interface FPCommunity {
  readonly id: string;
  readonly url: string;
  readonly name: CommunityName;
  readonly symbol: CommunitySymbol;
  readonly longName: CommunityLongName;
}
export interface FPConnection {
  apiKey?: string;
  baseUrl?: string;
}
export interface FPConfig {
  community: FPCommunity;
  communityName: CommunityName;
  connection: FPConnection;
}

export interface Provider {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  phoneNumber: string | null;
  providerId: string;
}
export interface Certificate {
  uid: string;
  displayName: string | null;
  photoURL: string | null;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  tenantId: string | null;
  apiKey: string;
  providerData: Provider[];
}
export interface CommunityContentType {
  readonly order: number;
  readonly info: CommunityContentInfo;
  readonly claim: CommunityContentClaim;
  readonly quickReviews: string[];
  readonly figureRequired: boolean;
  readonly contentTypeLabel: string;
  readonly defaultConditions: CommunityDefaultCondition[];
  readonly reviewPeriodEnabled: boolean;
  readonly articleType: 'micropub' | 'microreview';
}
interface CommunityContentInfo {
  readonly title: string;
  readonly diagram: string;
  readonly description: string;
}
interface CommunityContentClaimItem {
  readonly label: string;
  readonly filter: string;
  readonly newTermAllowed: boolean;
  readonly setFilterAsItem: boolean;
}
interface CommunityDefaultCondition {
  name: string;
  type: any;
}
interface CommunityContentClaim {
  readonly item1: CommunityContentClaimItem;
  readonly item2: CommunityContentClaimItem | null;
  readonly relationship: Relationship[] | null;
  readonly type: 'single' | 'relational' | null;
}
export interface CommunityMetrics {
  userCount: number;
  pubCount: number;
  subCommunityCount: number;
}
export interface Community {
  name: string;
  dictionaryId: string;
  legal?: {
    [key: string]: Legal;
  } | null;
  createdOn: number;
  metrics: CommunityMetrics;
  contentTypes: {
    [key: string]: CommunityContentType;
  };
  loadingTaglines: string[];
  topSubCommunities: string[];
  quickReviewTemplates: string[];
}
export interface DictionaryMetrics {
  readonly pubCount: number;
  readonly dateAdded: number;
  readonly authorCount: number;
  readonly dateModified: number;
}
export interface DictionaryOrigin {
  readonly url: string;
  readonly id: string;
  readonly tag: string;
}
export interface DictionaryTerm {
  readonly id: string;
  readonly isCommunity: boolean;
  readonly ancestors: string[];
  readonly metrics: DictionaryMetrics;
  readonly description: string;
  readonly name: string;
  readonly longName: string;
  readonly origin: DictionaryOrigin;
  readonly props: any | null;
  readonly type: string;
  readonly author: Author;
}
export interface Author {
  readonly email: string;
  readonly name: string;
  readonly id: string;
  readonly orcid: string;
}

export interface ContentOrigin {
  readonly url: string;
  readonly source: string;
  readonly originalContent: boolean;
}
export interface Figure {
  readonly id: string;
  readonly url: string;
  readonly type: string;
  readonly order: number;
  readonly label: string;
  readonly name?: string;
}
export interface Asset {
  readonly id: string;
  readonly url: string;
  readonly name: 'Supports' | 'Refutes' | 'Extends' | string;
}
export interface Draft {
  readonly isDraft: boolean;
  readonly contentType: string;
  readonly claim: ClaimDefinition;
  readonly term1?: TermDefinition;
  readonly term2?: TermDefinition;
}
export interface Review {
  readonly isPubAccepted: boolean;
  readonly isPubRetracted: boolean;
  readonly deadline: number;
  readonly acceptedBy: string[];
  readonly reportedBy: string[];
  readonly suggestedReviewers: string[];
  readonly quickReviews: { [key: string]: string[] };
  readonly editorialHold: boolean;
}
export interface Metadata {
  readonly protocols: Asset[];
  readonly code: Asset[];
  readonly datasets: Asset[];
  readonly references: Asset[];
  readonly datePublished: number;
  readonly dateUpdated: number;
  readonly doi: string;
  readonly fetchId: string;
  readonly draft: Draft | null;
  readonly allDictionaryIds: string[];

  [key: string]: any;
}
export type PubDefinitionArticleTypeData = {
  externalDOI: string;
  [key: string]: any;
};

export interface Pub {
  readonly id: string;
  readonly title: string;
  readonly acceptedNotification: boolean;
  readonly articleType: 'micropub' | 'microreview' | 'term';
  readonly articleTypeData: PubDefinitionArticleTypeData;
  readonly author: Author;
  readonly contributors: Author[];
  readonly description: string;
  readonly figures: Figure[];
  readonly metadata: Metadata;
  readonly review: Review;
  readonly bookmarkedBy: string[];
  readonly claim: PubClaim;

  [key: string]: any;
}
