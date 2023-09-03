/* tslint:disable */
/* eslint-disable */
import { AudioFile } from './audio-file';
import { Import } from './import';
export type AudioUrlImport = Import & {
'audio'?: AudioFile;
'url'?: string;
};
