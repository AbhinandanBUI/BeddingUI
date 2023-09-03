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

import { AudioUrlImport } from '../models/audio-url-import';

@Injectable({ providedIn: 'root' })
export class AudioUrlImportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAudioUrlImportGetPage()` */
  static readonly ServiceAudioUrlImportGetPagePath = '/audiourlimport';

  /**
   * Returns AudioUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished' | 'url';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AudioUrlImport>>> {
    const rb = new RequestBuilder(this.rootUrl, AudioUrlImportService.ServiceAudioUrlImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioUrlImport>>;
      })
    );
  }

  /**
   * Returns AudioUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished' | 'url';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<AudioUrlImport>> {
    return this.serviceAudioUrlImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioUrlImport>>): Array<AudioUrlImport> => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportInsert()` */
  static readonly ServiceAudioUrlImportInsertPath = '/audiourlimport';

  /**
   * Creates an AudioUrlImport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportInsert$Response(
    params?: {
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioUrlImportService.ServiceAudioUrlImportInsertPath, 'post');
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
   * Creates an AudioUrlImport.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportInsert(
    params?: {
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioUrlImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportGet()` */
  static readonly ServiceAudioUrlImportGetPath = '/audiourlimport/{id}';

  /**
   * Returns an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioUrlImport>> {
    const rb = new RequestBuilder(this.rootUrl, AudioUrlImportService.ServiceAudioUrlImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioUrlImport>;
      })
    );
  }

  /**
   * Returns an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioUrlImport> {
    return this.serviceAudioUrlImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioUrlImport>): AudioUrlImport => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportUpdate()` */
  static readonly ServiceAudioUrlImportUpdatePath = '/audiourlimport/{id}';

  /**
   * Updates an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioUrlImportService.ServiceAudioUrlImportUpdatePath, 'put');
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
   * Updates an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioUrlImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportErase()` */
  static readonly ServiceAudioUrlImportErasePath = '/audiourlimport/{id}';

  /**
   * Deletes an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioUrlImportService.ServiceAudioUrlImportErasePath, 'delete');
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
   * Deletes an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioUrlImportErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
