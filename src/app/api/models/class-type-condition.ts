/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
export type ClassTypeCondition = Condition & {
'compareOperator'?: 'EQUAL' | 'NOTEQUAL';
'type'?: number;
};
