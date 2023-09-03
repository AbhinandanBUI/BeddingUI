/* tslint:disable */
/* eslint-disable */
export interface File {
  classType?: 'ImageFile' | 'TextFile' | 'AudioFile';
  created?: string;
  fileSize?: number;
  hash?: string;
  id: string;
}
