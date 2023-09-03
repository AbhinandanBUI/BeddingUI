/* tslint:disable */
/* eslint-disable */
export interface Setting {
  description?: string;
  id: string;
  isDisabled?: boolean;
  isHidden?: boolean;
  name?: string;
  subType?: string;
  type?: 'Boolean' | 'Number' | 'String' | 'Date' | 'Url' | 'Json' | 'Enumeration';
  value?: string;
}
