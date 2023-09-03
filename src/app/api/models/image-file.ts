/* tslint:disable */
/* eslint-disable */
import { File } from './file';
export type ImageFile = File & {
'format'?: 'JPEG' | 'PNG' | 'GIF' | 'WEBP' | 'TIFF' | 'BMP' | 'UNKNOWN';
'height'?: number;
'width'?: number;
};
