/* tslint:disable */
/* eslint-disable */
import { Song } from './song';
export interface Player {
  currentSong: Song;
  duration: number;
  id?: string;
  mode: 'SEQUENTIAL' | 'LOOP_ONE_TRACK' | 'LOOP_PLAYLIST';
  muted: boolean;
  playbackRate: number;
  position: number;
  random: boolean;
  source?: string;
  state: 'PLAYING' | 'PAUSED' | 'STOPPED';
  volume: number;
}
