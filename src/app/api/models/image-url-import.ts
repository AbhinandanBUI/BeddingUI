/* tslint:disable */
/* eslint-disable */
import { ImageFile } from './image-file';
import { Import } from './import';
export type ImageUrlImport = Import & {
'image'?: ImageFile;
'url'?: string;
};
