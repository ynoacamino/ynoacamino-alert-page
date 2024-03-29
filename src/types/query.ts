export enum QueryStatus {
  AVARILABLE = 'AVAILABLE',
  PENDING = 'PENDING',
  TIMEOUT = 'TIMEOUT',
}

export interface Query {
  id: string;
  createdAt: Date;
  status: QueryStatus;
}
