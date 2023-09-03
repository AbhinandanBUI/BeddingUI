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

@Injectable({ providedIn: 'root' })
export class AlbumService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAlbumGetPage()` */
  static readonly ServiceAlbumGetPagePath = '/album';

  /**
   * Returns Album(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'name' | 'created' | 'visible' | 'year';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Album>>> {
    const rb = new RequestBuilder(this.rootUrl, AlbumService.ServiceAlbumGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Album>>;
      })
    );
  }

  /**
   * Returns Album(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'name' | 'created' | 'visible' | 'year';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Album>> {
    return this.serviceAlbumGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Album>>): Array<Album> => r.body)
    );
  }

  /** Path part for operation `serviceAlbumInsert()` */
  static readonly ServiceAlbumInsertPath = '/album';

  /**
   * Creates an Album.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumInsert$Response(
    params?: {
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AlbumService.ServiceAlbumInsertPath, 'post');
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
   * Creates an Album.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumInsert(
    params?: {
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAlbumInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAlbumGet()` */
  static readonly ServiceAlbumGetPath = '/album/{id}';

  /**
   * Returns an Album using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Album>> {
    const rb = new RequestBuilder(this.rootUrl, AlbumService.ServiceAlbumGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Album>;
      })
    );
  }

  /**
   * Returns an Album using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Album> {
    return this.serviceAlbumGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Album>): Album => r.body)
    );
  }

  /** Path part for operation `serviceAlbumUpdate()` */
  static readonly ServiceAlbumUpdatePath = '/album/{id}';

  /**
   * Updates an Album using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AlbumService.ServiceAlbumUpdatePath, 'put');
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
   * Updates an Album using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAlbumUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAlbumErase()` */
  static readonly ServiceAlbumErasePath = '/album/{id}';

  /**
   * Deletes an Album using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AlbumService.ServiceAlbumErasePath, 'delete');
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
   * Deletes an Album using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAlbumErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAlbumErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
