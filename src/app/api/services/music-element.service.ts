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

import { Album } from '../models/album';
import { Artist } from '../models/artist';
import { Playlist } from '../models/playlist';
import { Song } from '../models/song';

@Injectable({ providedIn: 'root' })
export class MusicElementService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceMusicElementGetPage()` */
  static readonly ServiceMusicElementGetPagePath = '/musicelement';

  /**
   * Returns MusicElement(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>> {
    const rb = new RequestBuilder(this.rootUrl, MusicElementService.ServiceMusicElementGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>;
      })
    );
  }

  /**
   * Returns MusicElement(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGetPage(
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
  ): Observable<Array<(Song | Album | Artist | Playlist)>> {
    return this.serviceMusicElementGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>): Array<(Song | Album | Artist | Playlist)> => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementInsert()` */
  static readonly ServiceMusicElementInsertPath = '/musicelement';

  /**
   * Creates an MusicElement.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementInsert$Response(
    params?: {
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MusicElementService.ServiceMusicElementInsertPath, 'post');
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
   * Creates an MusicElement.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementInsert(
    params?: {
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceMusicElementInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementGet()` */
  static readonly ServiceMusicElementGetPath = '/musicelement/{id}';

  /**
   * Returns an MusicElement using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(Song | Album | Artist | Playlist)>> {
    const rb = new RequestBuilder(this.rootUrl, MusicElementService.ServiceMusicElementGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(Song | Album | Artist | Playlist)>;
      })
    );
  }

  /**
   * Returns an MusicElement using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(Song | Album | Artist | Playlist)> {
    return this.serviceMusicElementGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(Song | Album | Artist | Playlist)>): (Song | Album | Artist | Playlist) => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementUpdate()` */
  static readonly ServiceMusicElementUpdatePath = '/musicelement/{id}';

  /**
   * Updates an MusicElement using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MusicElementService.ServiceMusicElementUpdatePath, 'put');
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
   * Updates an MusicElement using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceMusicElementUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementErase()` */
  static readonly ServiceMusicElementErasePath = '/musicelement/{id}';

  /**
   * Deletes an MusicElement using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, MusicElementService.ServiceMusicElementErasePath, 'delete');
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
   * Deletes an MusicElement using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceMusicElementErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
