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

import { AudioFileImport } from '../models/audio-file-import';
import { AudioUrlImport } from '../models/audio-url-import';
import { ImageUrlImport } from '../models/image-url-import';

@Injectable({ providedIn: 'root' })
export class ImportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceImportGetPage()` */
  static readonly ServiceImportGetPagePath = '/import';

  /**
   * Returns Import(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>> {
    const rb = new RequestBuilder(this.rootUrl, ImportService.ServiceImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>;
      })
    );
  }

  /**
   * Returns Import(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>> {
    return this.serviceImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>): Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)> => r.body)
    );
  }

  /** Path part for operation `serviceImportInsert()` */
  static readonly ServiceImportInsertPath = '/import';

  /**
   * Creates an Import.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportInsert$Response(
    params?: {
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImportService.ServiceImportInsertPath, 'post');
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
   * Creates an Import.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportInsert(
    params?: {
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImportGet()` */
  static readonly ServiceImportGetPath = '/import/{id}';

  /**
   * Returns an Import using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>> {
    const rb = new RequestBuilder(this.rootUrl, ImportService.ServiceImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>;
      })
    );
  }

  /**
   * Returns an Import using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(AudioUrlImport | ImageUrlImport | AudioFileImport)> {
    return this.serviceImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>): (AudioUrlImport | ImageUrlImport | AudioFileImport) => r.body)
    );
  }

  /** Path part for operation `serviceImportUpdate()` */
  static readonly ServiceImportUpdatePath = '/import/{id}';

  /**
   * Updates an Import using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImportService.ServiceImportUpdatePath, 'put');
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
   * Updates an Import using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImportErase()` */
  static readonly ServiceImportErasePath = '/import/{id}';

  /**
   * Deletes an Import using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImportService.ServiceImportErasePath, 'delete');
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
   * Deletes an Import using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImportErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
