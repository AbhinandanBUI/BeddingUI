/* tslint:disable */
/* eslint-disable */
import { ClassTypeCondition } from './class-type-condition';
import { NumberCondition } from './number-condition';
import { StringCondition } from './string-condition';
export interface Filter {
  conditions?: Array<(NumberCondition | StringCondition | ClassTypeCondition)>;
  created?: string;
  description?: string;
  id: string;
  name?: string;
}
