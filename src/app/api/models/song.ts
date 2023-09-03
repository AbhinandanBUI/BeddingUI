/* tslint:disable */
/* eslint-disable */
import { Artist } from './artist';
import { AudioFile } from './audio-file';
import { MusicElement } from './music-element';
export type Song = MusicElement & {
'artists'?: Array<Artist>;
'file'?: AudioFile;
};
