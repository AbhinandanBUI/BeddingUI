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

import { AudioEdit } from '../models/audio-edit';

@Injectable({ providedIn: 'root' })
export class AudioEditService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAudioEditGetPage()` */
  static readonly ServiceAudioEditGetPagePath = '/audioedit';

  /**
   * Returns AudioEdit(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioEditGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'type' | 'progress' | 'shouldNormalize' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AudioEdit>>> {
    const rb = new RequestBuilder(this.rootUrl, AudioEditService.ServiceAudioEditGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioEdit>>;
      })
    );
  }

  /**
   * Returns AudioEdit(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioEditGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'type' | 'progress' | 'shouldNormalize' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<AudioEdit>> {
    return this.serviceAudioEditGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioEdit>>): Array<AudioEdit> => r.body)
    );
  }

  /** Path part for operation `serviceAudioEditInsert()` */
  static readonly ServiceAudioEditInsertPath = '/audioedit';

  /**
   * Creates an AudioEdit.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioEditInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioEditInsert$Response(
    params?: {
  
    /**
     * AudioEdit that should be updated
     */
    body?: AudioEdit
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioEditService.ServiceAudioEditInsertPath, 'post');
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
   * Creates an AudioEdit.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioEditInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioEditInsert(
    params?: {
  
    /**
     * AudioEdit that should be updated
     */
    body?: AudioEdit
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioEditInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioEditGet()` */
  static readonly ServiceAudioEditGetPath = '/audioedit/{id}';

  /**
   * Returns an AudioEdit using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioEditGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioEdit>> {
    const rb = new RequestBuilder(this.rootUrl, AudioEditService.ServiceAudioEditGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioEdit>;
      })
    );
  }

  /**
   * Returns an AudioEdit using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioEditGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioEdit> {
    return this.serviceAudioEditGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioEdit>): AudioEdit => r.body)
    );
  }

  /** Path part for operation `serviceAudioEditUpdate()` */
  static readonly ServiceAudioEditUpdatePath = '/audioedit/{id}';

  /**
   * Updates an AudioEdit using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioEditUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioEditUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioEdit that should be updated
     */
    body?: AudioEdit
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioEditService.ServiceAudioEditUpdatePath, 'put');
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
   * Updates an AudioEdit using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioEditUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioEditUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioEdit that should be updated
     */
    body?: AudioEdit
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioEditUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioEditErase()` */
  static readonly ServiceAudioEditErasePath = '/audioedit/{id}';

  /**
   * Deletes an AudioEdit using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioEditErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioEditService.ServiceAudioEditErasePath, 'delete');
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
   * Deletes an AudioEdit using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioEditErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioEditErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioEditErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
