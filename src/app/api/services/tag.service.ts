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

import { Tag } from '../models/tag';

@Injectable({ providedIn: 'root' })
export class TagService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceTagGetPage()` */
  static readonly ServiceTagGetPagePath = '/tag';

  /**
   * Returns Tag(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'type' | 'isVisible' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Tag>>> {
    const rb = new RequestBuilder(this.rootUrl, TagService.ServiceTagGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Tag>>;
      })
    );
  }

  /**
   * Returns Tag(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'type' | 'isVisible' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Tag>> {
    return this.serviceTagGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tag>>): Array<Tag> => r.body)
    );
  }

  /** Path part for operation `serviceTagInsert()` */
  static readonly ServiceTagInsertPath = '/tag';

  /**
   * Creates an Tag.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagInsert$Response(
    params?: {
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TagService.ServiceTagInsertPath, 'post');
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
   * Creates an Tag.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagInsert(
    params?: {
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceTagInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceTagGet()` */
  static readonly ServiceTagGetPath = '/tag/{id}';

  /**
   * Returns an Tag using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Tag>> {
    const rb = new RequestBuilder(this.rootUrl, TagService.ServiceTagGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tag>;
      })
    );
  }

  /**
   * Returns an Tag using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Tag> {
    return this.serviceTagGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tag>): Tag => r.body)
    );
  }

  /** Path part for operation `serviceTagUpdate()` */
  static readonly ServiceTagUpdatePath = '/tag/{id}';

  /**
   * Updates an Tag using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TagService.ServiceTagUpdatePath, 'put');
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
   * Updates an Tag using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceTagUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceTagErase()` */
  static readonly ServiceTagErasePath = '/tag/{id}';

  /**
   * Deletes an Tag using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, TagService.ServiceTagErasePath, 'delete');
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
   * Deletes an Tag using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceTagErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
