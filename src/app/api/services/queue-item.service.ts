/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { QueueItem } from '../models/queue-item';

@Injectable({ providedIn: 'root' })
export class QueueItemService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceQueueItemGetPage()` */
  static readonly ServiceQueueItemGetPagePath = '/queueitem';

  /**
   * Returns QueueItem(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'position' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<QueueItem>>> {
    const rb = new RequestBuilder(this.rootUrl, QueueItemService.ServiceQueueItemGetPagePath, 'get');
    if (params) {
      rb.query('filterName', params.filterName, {});
      rb.query('values', params.values, {});
      rb.query('sortBy', params.sortBy, {});
      rb.query('orderBy', params.orderBy, {});
      rb.query('pageIndex', params.pageIndex, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<QueueItem>>;
      })
    );
  }

  /**
   * Returns QueueItem(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'position' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<QueueItem>> {
    return this.serviceQueueItemGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<QueueItem>>): Array<QueueItem> => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemInsert()` */
  static readonly ServiceQueueItemInsertPath = '/queueitem';

  /**
   * Creates an QueueItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemInsert$Response(
    params?: {
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, QueueItemService.ServiceQueueItemInsertPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Creates an QueueItem.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemInsert(
    params?: {
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceQueueItemInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemGet()` */
  static readonly ServiceQueueItemGetPath = '/queueitem/{id}';

  /**
   * Returns an QueueItem using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<QueueItem>> {
    const rb = new RequestBuilder(this.rootUrl, QueueItemService.ServiceQueueItemGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<QueueItem>;
      })
    );
  }

  /**
   * Returns an QueueItem using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<QueueItem> {
    return this.serviceQueueItemGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<QueueItem>): QueueItem => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemUpdate()` */
  static readonly ServiceQueueItemUpdatePath = '/queueitem/{id}';

  /**
   * Updates an QueueItem using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, QueueItemService.ServiceQueueItemUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Updates an QueueItem using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceQueueItemUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemErase()` */
  static readonly ServiceQueueItemErasePath = '/queueitem/{id}';

  /**
   * Deletes an QueueItem using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, QueueItemService.ServiceQueueItemErasePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Deletes an QueueItem using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceQueueItemErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
