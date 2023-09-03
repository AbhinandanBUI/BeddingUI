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

import { SongIdentifier } from '../models/song-identifier';

@Injectable({ providedIn: 'root' })
export class SongIdentifierService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceSongIdentifierGetPage()` */
  static readonly ServiceSongIdentifierGetPagePath = '/songidentifier';

  /**
   * Returns SongIdentifier(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SongIdentifier>>> {
    const rb = new RequestBuilder(this.rootUrl, SongIdentifierService.ServiceSongIdentifierGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<SongIdentifier>>;
      })
    );
  }

  /**
   * Returns SongIdentifier(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<SongIdentifier>> {
    return this.serviceSongIdentifierGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SongIdentifier>>): Array<SongIdentifier> => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierInsert()` */
  static readonly ServiceSongIdentifierInsertPath = '/songidentifier';

  /**
   * Creates an SongIdentifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierInsert$Response(
    params?: {
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SongIdentifierService.ServiceSongIdentifierInsertPath, 'post');
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
   * Creates an SongIdentifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierInsert(
    params?: {
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongIdentifierInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierGet()` */
  static readonly ServiceSongIdentifierGetPath = '/songidentifier/{id}';

  /**
   * Returns an SongIdentifier using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SongIdentifier>> {
    const rb = new RequestBuilder(this.rootUrl, SongIdentifierService.ServiceSongIdentifierGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SongIdentifier>;
      })
    );
  }

  /**
   * Returns an SongIdentifier using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<SongIdentifier> {
    return this.serviceSongIdentifierGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<SongIdentifier>): SongIdentifier => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierUpdate()` */
  static readonly ServiceSongIdentifierUpdatePath = '/songidentifier/{id}';

  /**
   * Updates an SongIdentifier using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SongIdentifierService.ServiceSongIdentifierUpdatePath, 'put');
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
   * Updates an SongIdentifier using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongIdentifierUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierErase()` */
  static readonly ServiceSongIdentifierErasePath = '/songidentifier/{id}';

  /**
   * Deletes an SongIdentifier using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SongIdentifierService.ServiceSongIdentifierErasePath, 'delete');
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
   * Deletes an SongIdentifier using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongIdentifierErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
