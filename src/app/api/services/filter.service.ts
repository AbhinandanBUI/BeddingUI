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

import { Filter } from '../models/filter';

@Injectable({ providedIn: 'root' })
export class FilterService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceFilterGetPage()` */
  static readonly ServiceFilterGetPagePath = '/filter';

  /**
   * Returns Filter(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'description' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Filter>>> {
    const rb = new RequestBuilder(this.rootUrl, FilterService.ServiceFilterGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Filter>>;
      })
    );
  }

  /**
   * Returns Filter(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'description' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Filter>> {
    return this.serviceFilterGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Filter>>): Array<Filter> => r.body)
    );
  }

  /** Path part for operation `serviceFilterInsert()` */
  static readonly ServiceFilterInsertPath = '/filter';

  /**
   * Creates an Filter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterInsert$Response(
    params?: {
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FilterService.ServiceFilterInsertPath, 'post');
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
   * Creates an Filter.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterInsert(
    params?: {
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceFilterInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceFilterGet()` */
  static readonly ServiceFilterGetPath = '/filter/{id}';

  /**
   * Returns an Filter using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Filter>> {
    const rb = new RequestBuilder(this.rootUrl, FilterService.ServiceFilterGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Filter>;
      })
    );
  }

  /**
   * Returns an Filter using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Filter> {
    return this.serviceFilterGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Filter>): Filter => r.body)
    );
  }

  /** Path part for operation `serviceFilterUpdate()` */
  static readonly ServiceFilterUpdatePath = '/filter/{id}';

  /**
   * Updates an Filter using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FilterService.ServiceFilterUpdatePath, 'put');
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
   * Updates an Filter using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceFilterUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceFilterErase()` */
  static readonly ServiceFilterErasePath = '/filter/{id}';

  /**
   * Deletes an Filter using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, FilterService.ServiceFilterErasePath, 'delete');
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
   * Deletes an Filter using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceFilterErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
