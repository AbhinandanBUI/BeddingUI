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

import { Download } from '../models/download';

@Injectable({ providedIn: 'root' })
export class DownloadService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceDownloadGetPage()` */
  static readonly ServiceDownloadGetPagePath = '/download';

  /**
   * Returns Download(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'url' | 'status' | 'size' | 'currentSize' | 'bytesLeft' | 'bytesPerSeconds' | 'percentage' | 'retries' | 'contentType' | 'checksum' | 'created' | 'lastUpdate';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Download>>> {
    const rb = new RequestBuilder(this.rootUrl, DownloadService.ServiceDownloadGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Download>>;
      })
    );
  }

  /**
   * Returns Download(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'url' | 'status' | 'size' | 'currentSize' | 'bytesLeft' | 'bytesPerSeconds' | 'percentage' | 'retries' | 'contentType' | 'checksum' | 'created' | 'lastUpdate';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Download>> {
    return this.serviceDownloadGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Download>>): Array<Download> => r.body)
    );
  }

  /** Path part for operation `serviceDownloadInsert()` */
  static readonly ServiceDownloadInsertPath = '/download';

  /**
   * Creates an Download.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceDownloadInsert$Response(
    params?: {
  
    /**
     * Download that should be updated
     */
    body?: Download
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DownloadService.ServiceDownloadInsertPath, 'post');
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
   * Creates an Download.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceDownloadInsert(
    params?: {
  
    /**
     * Download that should be updated
     */
    body?: Download
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceDownloadInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceDownloadGet()` */
  static readonly ServiceDownloadGetPath = '/download/{id}';

  /**
   * Returns an Download using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Download>> {
    const rb = new RequestBuilder(this.rootUrl, DownloadService.ServiceDownloadGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Download>;
      })
    );
  }

  /**
   * Returns an Download using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Download> {
    return this.serviceDownloadGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Download>): Download => r.body)
    );
  }

  /** Path part for operation `serviceDownloadErase()` */
  static readonly ServiceDownloadErasePath = '/download/{id}';

  /**
   * Deletes an Download using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, DownloadService.ServiceDownloadErasePath, 'delete');
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
   * Deletes an Download using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceDownloadErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
