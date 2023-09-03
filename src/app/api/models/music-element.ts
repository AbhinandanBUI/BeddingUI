/* tslint:disable */
/* eslint-disable */
import { ImageFile } from './image-file';
import { Tag } from './tag';
export interface MusicElement {
  classType: 'Song' | 'Album' | 'Artist' | 'Playlist';
  created?: string;
  id: string;
  image: ImageFile;
  name: string;
  tags: Array<Tag>;
  visible: boolean;
}
