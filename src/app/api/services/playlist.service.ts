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

import { Playlist } from '../models/playlist';

@Injectable({ providedIn: 'root' })
export class PlaylistService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `servicePlaylistGetPage()` */
  static readonly ServicePlaylistGetPagePath = '/playlist';

  /**
   * Returns Playlist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'name' | 'created' | 'visible';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Playlist>>> {
    const rb = new RequestBuilder(this.rootUrl, PlaylistService.ServicePlaylistGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Playlist>>;
      })
    );
  }

  /**
   * Returns Playlist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'name' | 'created' | 'visible';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Playlist>> {
    return this.servicePlaylistGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Playlist>>): Array<Playlist> => r.body)
    );
  }

  /** Path part for operation `servicePlaylistInsert()` */
  static readonly ServicePlaylistInsertPath = '/playlist';

  /**
   * Creates an Playlist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistInsert$Response(
    params?: {
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlaylistService.ServicePlaylistInsertPath, 'post');
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
   * Creates an Playlist.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistInsert(
    params?: {
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlaylistInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `servicePlaylistGet()` */
  static readonly ServicePlaylistGetPath = '/playlist/{id}';

  /**
   * Returns an Playlist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Playlist>> {
    const rb = new RequestBuilder(this.rootUrl, PlaylistService.ServicePlaylistGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Playlist>;
      })
    );
  }

  /**
   * Returns an Playlist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Playlist> {
    return this.servicePlaylistGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Playlist>): Playlist => r.body)
    );
  }

  /** Path part for operation `servicePlaylistUpdate()` */
  static readonly ServicePlaylistUpdatePath = '/playlist/{id}';

  /**
   * Updates an Playlist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlaylistService.ServicePlaylistUpdatePath, 'put');
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
   * Updates an Playlist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlaylistUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `servicePlaylistErase()` */
  static readonly ServicePlaylistErasePath = '/playlist/{id}';

  /**
   * Deletes an Playlist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlaylistService.ServicePlaylistErasePath, 'delete');
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
   * Deletes an Playlist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlaylistErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
