export enum QueryStatus {
  AVAILABLE = 'AVAILABLE',
  NOT_AVAILABLE = 'NOT_AVAILABLE',
  TIMEOUT = 'TIMEOUT',
}

export interface Query {
  id: string;
  createdAt: Date;
  status: QueryStatus;
}
