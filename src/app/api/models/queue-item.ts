/* tslint:disable */
/* eslint-disable */
import { Album } from './album';
import { Song } from './song';
export interface QueueItem {
  album: Album;
  created?: string;
  id: string;
  position: number;
  song: Song;
}
