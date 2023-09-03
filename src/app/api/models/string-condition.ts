/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
export type StringCondition = Condition & {
'compareOperator'?: 'GREATER' | 'SMALLER' | 'EQUAL' | 'NOTEQUAL' | 'CONTAINS' | 'STARTSWITH' | 'ENDSWITH';
'value'?: string;
};
