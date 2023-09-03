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

import { ImageUrlImport } from '../models/image-url-import';

@Injectable({ providedIn: 'root' })
export class ImageUrlImportService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceImageUrlImportGetPage()` */
  static readonly ServiceImageUrlImportGetPagePath = '/imageurlimport';

  /**
   * Returns ImageUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageUrlImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<ImageUrlImport>>> {
    const rb = new RequestBuilder(this.rootUrl, ImageUrlImportService.ServiceImageUrlImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<ImageUrlImport>>;
      })
    );
  }

  /**
   * Returns ImageUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageUrlImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportGetPage(
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
  ): Observable<Array<ImageUrlImport>> {
    return this.serviceImageUrlImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ImageUrlImport>>): Array<ImageUrlImport> => r.body)
    );
  }

  /** Path part for operation `serviceImageUrlImportInsert()` */
  static readonly ServiceImageUrlImportInsertPath = '/imageurlimport';

  /**
   * Creates an ImageUrlImport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageUrlImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImageUrlImportInsert$Response(
    params?: {
  
    /**
     * ImageUrlImport that should be updated
     */
    body?: ImageUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageUrlImportService.ServiceImageUrlImportInsertPath, 'post');
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
   * Creates an ImageUrlImport.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageUrlImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImageUrlImportInsert(
    params?: {
  
    /**
     * ImageUrlImport that should be updated
     */
    body?: ImageUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageUrlImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImageUrlImportGet()` */
  static readonly ServiceImageUrlImportGetPath = '/imageurlimport/{id}';

  /**
   * Returns an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageUrlImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ImageUrlImport>> {
    const rb = new RequestBuilder(this.rootUrl, ImageUrlImportService.ServiceImageUrlImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImageUrlImport>;
      })
    );
  }

  /**
   * Returns an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageUrlImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<ImageUrlImport> {
    return this.serviceImageUrlImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageUrlImport>): ImageUrlImport => r.body)
    );
  }

  /** Path part for operation `serviceImageUrlImportUpdate()` */
  static readonly ServiceImageUrlImportUpdatePath = '/imageurlimport/{id}';

  /**
   * Updates an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageUrlImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImageUrlImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * ImageUrlImport that should be updated
     */
    body?: ImageUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageUrlImportService.ServiceImageUrlImportUpdatePath, 'put');
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
   * Updates an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageUrlImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImageUrlImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * ImageUrlImport that should be updated
     */
    body?: ImageUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageUrlImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImageUrlImportErase()` */
  static readonly ServiceImageUrlImportErasePath = '/imageurlimport/{id}';

  /**
   * Deletes an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageUrlImportErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageUrlImportService.ServiceImageUrlImportErasePath, 'delete');
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
   * Deletes an ImageUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageUrlImportErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageUrlImportErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageUrlImportErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
