/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
export type NumberCondition = Condition & {
'compareOperator'?: 'GREATER' | 'SMALLER' | 'EQUAL' | 'NOTEQUAL';
'number'?: number;
};
