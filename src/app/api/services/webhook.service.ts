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

import { Webhook } from '../models/webhook';

@Injectable({ providedIn: 'root' })
export class WebhookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceWebhookGetPage()` */
  static readonly ServiceWebhookGetPagePath = '/webhook';

  /**
   * Returns Webhook(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'callbackUrl' | 'isActive' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Webhook>>> {
    const rb = new RequestBuilder(this.rootUrl, WebhookService.ServiceWebhookGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Webhook>>;
      })
    );
  }

  /**
   * Returns Webhook(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'callbackUrl' | 'isActive' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Webhook>> {
    return this.serviceWebhookGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Webhook>>): Array<Webhook> => r.body)
    );
  }

  /** Path part for operation `serviceWebhookInsert()` */
  static readonly ServiceWebhookInsertPath = '/webhook';

  /**
   * Creates an Webhook.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookInsert$Response(
    params?: {
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebhookService.ServiceWebhookInsertPath, 'post');
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
   * Creates an Webhook.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookInsert(
    params?: {
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceWebhookInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceWebhookGet()` */
  static readonly ServiceWebhookGetPath = '/webhook/{id}';

  /**
   * Returns an Webhook using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Webhook>> {
    const rb = new RequestBuilder(this.rootUrl, WebhookService.ServiceWebhookGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Webhook>;
      })
    );
  }

  /**
   * Returns an Webhook using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Webhook> {
    return this.serviceWebhookGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Webhook>): Webhook => r.body)
    );
  }

  /** Path part for operation `serviceWebhookUpdate()` */
  static readonly ServiceWebhookUpdatePath = '/webhook/{id}';

  /**
   * Updates an Webhook using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebhookService.ServiceWebhookUpdatePath, 'put');
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
   * Updates an Webhook using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceWebhookUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceWebhookErase()` */
  static readonly ServiceWebhookErasePath = '/webhook/{id}';

  /**
   * Deletes an Webhook using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, WebhookService.ServiceWebhookErasePath, 'delete');
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
   * Deletes an Webhook using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceWebhookErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
