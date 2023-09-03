/* tslint:disable */
/* eslint-disable */
export interface Condition {
  classType: 'NumberCondition' | 'StringCondition' | 'ClassTypeCondition';
  hasStaticValue: boolean;
  id: string;
  property: string;
}
