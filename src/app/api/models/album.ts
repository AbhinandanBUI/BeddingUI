/* tslint:disable */
/* eslint-disable */
import { Artist } from './artist';
import { MusicElement } from './music-element';
import { Song } from './song';
export type Album = MusicElement & {
'artists'?: Array<Artist>;
'songs'?: Array<Song>;
'year'?: number;
};
