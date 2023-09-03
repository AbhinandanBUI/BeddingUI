/* tslint:disable */
/* eslint-disable */
import { Album } from './album';
import { Song } from './song';
export interface SongIdentifier {
  albumSuggestions: Array<Album>;
  created?: string;
  finished?: string;
  id: string;
  incomplete: Song;
  songSuggestion: Song;
  status?: 'NOT_STARTED' | 'IN_PROGRESS' | 'FILE_ANALIZED' | 'CANCELED' | 'FAILED' | 'SUCCESS';
}
