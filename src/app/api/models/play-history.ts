/* tslint:disable */
/* eslint-disable */
import { Album } from './album';
import { Playlist } from './playlist';
import { Song } from './song';
export interface PlayHistory {
  album?: Album;
  duration?: number;
  endTime?: string;
  id: string;
  moveReason?: 'EndOfQueue' | 'UserInteraction' | 'AutoAdvance' | 'SongComplete';
  nextSong?: Song;
  playlist?: Playlist;
  previousSong?: Song;
  song?: Song;
  startTime?: string;
  userAction?: 'UserSelected' | 'Skip' | 'Repeat' | 'AutoPlay' | 'UNKNOWN';
  wasSkipped?: boolean;
}
