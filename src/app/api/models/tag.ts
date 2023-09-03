/* tslint:disable */
/* eslint-disable */
export interface Tag {
  created?: string;
  id: string;
  isVisible?: boolean;
  name: string;
  type: 'Text' | 'MusicElement' | 'Url' | 'Date';
  value?: string;
}
