/* tslint:disable */
/* eslint-disable */
import { AudioFile } from './audio-file';
import { Import } from './import';
import { SongIdentifier } from './song-identifier';
export type AudioFileImport = Import & {
'file'?: AudioFile;
'suggestions'?: SongIdentifier;
};
