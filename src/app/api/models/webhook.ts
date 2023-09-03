/* tslint:disable */
/* eslint-disable */
import { Event } from './event';
export interface Webhook {
  callbackUrl?: string;
  created?: string;
  events?: Array<Event>;
  id: string;
  isActive?: boolean;
}
