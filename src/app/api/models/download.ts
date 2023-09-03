/* tslint:disable */
/* eslint-disable */
export interface Download {
  bytesLeft?: number;
  bytesPerSeconds?: number;
  checksum?: string;
  contentType?: string;
  created?: string;
  currentSize?: number;
  id: string;
  lastUpdate?: string;
  percentage?: number;
  retries?: number;
  size?: number;
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'PAUSED' | 'CANCELED' | 'RESTARTED' | 'FAILED' | 'SUCCESS';
  url?: string;
}
