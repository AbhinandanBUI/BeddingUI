/* tslint:disable */
/* eslint-disable */
import { File } from './file';
export type AudioFile = File & {
'bitRate'?: number;
'code'?: string;
'codeCount'?: number;
'codeHash'?: string;
'duration'?: string;
'format'?: 'M4A' | 'MP3' | 'OGG' | 'WAV' | 'FLAC' | 'UNKNOWN';
'start'?: string;
};
