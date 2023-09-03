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

import { Player } from '../models/player';

@Injectable({ providedIn: 'root' })
export class PlayerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `servicePlayerGetPage()` */
  static readonly ServicePlayerGetPagePath = '/player';

  /**
   * Returns Player(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayerGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayerGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'source' | 'position' | 'duration' | 'muted' | 'volume' | 'random' | 'playbackRate' | 'mode' | 'state';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Player>>> {
    const rb = new RequestBuilder(this.rootUrl, PlayerService.ServicePlayerGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Player>>;
      })
    );
  }

  /**
   * Returns Player(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayerGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayerGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'source' | 'position' | 'duration' | 'muted' | 'volume' | 'random' | 'playbackRate' | 'mode' | 'state';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Player>> {
    return this.servicePlayerGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Player>>): Array<Player> => r.body)
    );
  }

  /** Path part for operation `servicePlayerGet()` */
  static readonly ServicePlayerGetPath = '/player/{id}';

  /**
   * Returns an Player using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayerGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayerGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Player>> {
    const rb = new RequestBuilder(this.rootUrl, PlayerService.ServicePlayerGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Player>;
      })
    );
  }

  /**
   * Returns an Player using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayerGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayerGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Player> {
    return this.servicePlayerGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Player>): Player => r.body)
    );
  }

  /** Path part for operation `servicePlayerUpdate()` */
  static readonly ServicePlayerUpdatePath = '/player/{id}';

  /**
   * Updates an Player using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayerUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayerUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Player that should be updated
     */
    body?: Player
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlayerService.ServicePlayerUpdatePath, 'put');
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
   * Updates an Player using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayerUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayerUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Player that should be updated
     */
    body?: Player
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlayerUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
