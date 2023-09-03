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

import { ClassTypeCondition } from '../models/class-type-condition';
import { NumberCondition } from '../models/number-condition';
import { StringCondition } from '../models/string-condition';

@Injectable({ providedIn: 'root' })
export class ConditionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceConditionGetPage()` */
  static readonly ServiceConditionGetPagePath = '/condition';

  /**
   * Returns Condition(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'property' | 'hasStaticValue';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>> {
    const rb = new RequestBuilder(this.rootUrl, ConditionService.ServiceConditionGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>;
      })
    );
  }

  /**
   * Returns Condition(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'property' | 'hasStaticValue';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<(NumberCondition | StringCondition | ClassTypeCondition)>> {
    return this.serviceConditionGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>): Array<(NumberCondition | StringCondition | ClassTypeCondition)> => r.body)
    );
  }

  /** Path part for operation `serviceConditionInsert()` */
  static readonly ServiceConditionInsertPath = '/condition';

  /**
   * Creates an Condition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionInsert$Response(
    params?: {
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConditionService.ServiceConditionInsertPath, 'post');
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
   * Creates an Condition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionInsert(
    params?: {
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConditionGet()` */
  static readonly ServiceConditionGetPath = '/condition/{id}';

  /**
   * Returns an Condition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>> {
    const rb = new RequestBuilder(this.rootUrl, ConditionService.ServiceConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>;
      })
    );
  }

  /**
   * Returns an Condition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(NumberCondition | StringCondition | ClassTypeCondition)> {
    return this.serviceConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>): (NumberCondition | StringCondition | ClassTypeCondition) => r.body)
    );
  }

  /** Path part for operation `serviceConditionUpdate()` */
  static readonly ServiceConditionUpdatePath = '/condition/{id}';

  /**
   * Updates an Condition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConditionService.ServiceConditionUpdatePath, 'put');
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
   * Updates an Condition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConditionErase()` */
  static readonly ServiceConditionErasePath = '/condition/{id}';

  /**
   * Deletes an Condition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConditionService.ServiceConditionErasePath, 'delete');
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
   * Deletes an Condition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConditionErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
