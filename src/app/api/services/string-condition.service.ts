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

import { StringCondition } from '../models/string-condition';

@Injectable({ providedIn: 'root' })
export class StringConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceStringConditionInsert()` */
  static readonly ServiceStringConditionInsertPath = '/stringcondition';

  /**
   * Creates an StringCondition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionInsert$Response(
    params?: {
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, StringConditionService.ServiceStringConditionInsertPath, 'post');
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
   * Creates an StringCondition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionInsert(
    params?: {
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceStringConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionGet()` */
  static readonly ServiceStringConditionGetPath = '/stringcondition/{id}';

  /**
   * Returns an StringCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<StringCondition>> {
    const rb = new RequestBuilder(this.rootUrl, StringConditionService.ServiceStringConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringCondition>;
      })
    );
  }

  /**
   * Returns an StringCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StringCondition> {
    return this.serviceStringConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringCondition>): StringCondition => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionUpdate()` */
  static readonly ServiceStringConditionUpdatePath = '/stringcondition/{id}';

  /**
   * Updates an StringCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, StringConditionService.ServiceStringConditionUpdatePath, 'put');
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
   * Updates an StringCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceStringConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionErase()` */
  static readonly ServiceStringConditionErasePath = '/stringcondition/{id}';

  /**
   * Deletes an StringCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, StringConditionService.ServiceStringConditionErasePath, 'delete');
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
   * Deletes an StringCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceStringConditionErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
