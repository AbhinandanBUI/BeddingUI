/* tslint:disable */
/* eslint-disable */
import { AudioFile } from './audio-file';
export interface AudioEdit {
  created?: string;
  finished?: string;
  id: string;
  input?: AudioFile;
  output?: AudioFile;
  progress?: number;
  shouldNormalize?: boolean;
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'FAILED' | 'SUCCESS';
  type?: 'CONVERT_TO_MP3' | 'CONVERT_TO_FLAC' | 'CONVERT_TO_OGG' | 'TRIM' | 'MERGE';
}
