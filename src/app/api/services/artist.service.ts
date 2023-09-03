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

import { Artist } from '../models/artist';

@Injectable({ providedIn: 'root' })
export class ArtistService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceArtistGetPage()` */
  static readonly ServiceArtistGetPagePath = '/artist';

  /**
   * Returns Artist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<Artist>>> {
    const rb = new RequestBuilder(this.rootUrl, ArtistService.ServiceArtistGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Artist>>;
      })
    );
  }

  /**
   * Returns Artist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistGetPage(
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
  ): Observable<Array<Artist>> {
    return this.serviceArtistGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Artist>>): Array<Artist> => r.body)
    );
  }

  /** Path part for operation `serviceArtistInsert()` */
  static readonly ServiceArtistInsertPath = '/artist';

  /**
   * Creates an Artist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistInsert$Response(
    params?: {
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ArtistService.ServiceArtistInsertPath, 'post');
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
   * Creates an Artist.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistInsert(
    params?: {
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceArtistInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceArtistGet()` */
  static readonly ServiceArtistGetPath = '/artist/{id}';

  /**
   * Returns an Artist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Artist>> {
    const rb = new RequestBuilder(this.rootUrl, ArtistService.ServiceArtistGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Artist>;
      })
    );
  }

  /**
   * Returns an Artist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Artist> {
    return this.serviceArtistGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Artist>): Artist => r.body)
    );
  }

  /** Path part for operation `serviceArtistUpdate()` */
  static readonly ServiceArtistUpdatePath = '/artist/{id}';

  /**
   * Updates an Artist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ArtistService.ServiceArtistUpdatePath, 'put');
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
   * Updates an Artist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceArtistUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceArtistErase()` */
  static readonly ServiceArtistErasePath = '/artist/{id}';

  /**
   * Deletes an Artist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ArtistService.ServiceArtistErasePath, 'delete');
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
   * Deletes an Artist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceArtistErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceArtistErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
