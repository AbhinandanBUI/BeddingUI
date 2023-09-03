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

@Injectable({ providedIn: 'root' })
export class AudioFileImportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAudioFileImportGetPage()` */
  static readonly ServiceAudioFileImportGetPagePath = '/audiofileimport';

  /**
   * Returns AudioFileImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<AudioFileImport>>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileImportService.ServiceAudioFileImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioFileImport>>;
      })
    );
  }

  /**
   * Returns AudioFileImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGetPage(
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
  ): Observable<Array<AudioFileImport>> {
    return this.serviceAudioFileImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioFileImport>>): Array<AudioFileImport> => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileImportInsert()` */
  static readonly ServiceAudioFileImportInsertPath = '/audiofileimport';

  /**
   * Creates an AudioFileImport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportInsert$Response(
    params?: {
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileImportService.ServiceAudioFileImportInsertPath, 'post');
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
   * Creates an AudioFileImport.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportInsert(
    params?: {
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileImportGet()` */
  static readonly ServiceAudioFileImportGetPath = '/audiofileimport/{id}';

  /**
   * Returns an AudioFileImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioFileImport>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileImportService.ServiceAudioFileImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioFileImport>;
      })
    );
  }

  /**
   * Returns an AudioFileImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioFileImport> {
    return this.serviceAudioFileImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioFileImport>): AudioFileImport => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileImportUpdate()` */
  static readonly ServiceAudioFileImportUpdatePath = '/audiofileimport/{id}';

  /**
   * Updates an AudioFileImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileImportService.ServiceAudioFileImportUpdatePath, 'put');
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
   * Updates an AudioFileImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileImportErase()` */
  static readonly ServiceAudioFileImportErasePath = '/audiofileimport/{id}';

  /**
   * Deletes an AudioFileImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileImportService.ServiceAudioFileImportErasePath, 'delete');
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
   * Deletes an AudioFileImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileImportErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
