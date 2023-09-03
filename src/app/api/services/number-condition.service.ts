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

import { NumberCondition } from '../models/number-condition';

@Injectable({ providedIn: 'root' })
export class NumberConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceNumberConditionInsert()` */
  static readonly ServiceNumberConditionInsertPath = '/numbercondition';

  /**
   * Creates an NumberCondition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionInsert$Response(
    params?: {
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NumberConditionService.ServiceNumberConditionInsertPath, 'post');
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
   * Creates an NumberCondition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionInsert(
    params?: {
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceNumberConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionGet()` */
  static readonly ServiceNumberConditionGetPath = '/numbercondition/{id}';

  /**
   * Returns an NumberCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<NumberCondition>> {
    const rb = new RequestBuilder(this.rootUrl, NumberConditionService.ServiceNumberConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NumberCondition>;
      })
    );
  }

  /**
   * Returns an NumberCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<NumberCondition> {
    return this.serviceNumberConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<NumberCondition>): NumberCondition => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionUpdate()` */
  static readonly ServiceNumberConditionUpdatePath = '/numbercondition/{id}';

  /**
   * Updates an NumberCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NumberConditionService.ServiceNumberConditionUpdatePath, 'put');
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
   * Updates an NumberCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceNumberConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionErase()` */
  static readonly ServiceNumberConditionErasePath = '/numbercondition/{id}';

  /**
   * Deletes an NumberCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, NumberConditionService.ServiceNumberConditionErasePath, 'delete');
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
   * Deletes an NumberCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceNumberConditionErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
