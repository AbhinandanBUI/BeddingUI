/* tslint:disable */
/* eslint-disable */
import { Album } from './album';
import { Song } from './song';
export interface Import {
  album?: Album;
  classType: 'AudioUrlImport' | 'ImageUrlImport' | 'AudioFileImport';
  created: string;
  finished?: string;
  id: string;
  identified?: boolean;
  progress?: number;
  song?: Song;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'PAUSED' | 'CANCELED' | 'FAILED' | 'SUCCESS' | 'ACCEPTED';
}
