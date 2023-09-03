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

import { ConfigSection } from '../models/config-section';

@Injectable({ providedIn: 'root' })
export class ConfigSectionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceConfigSectionGetPage()` */
  static readonly ServiceConfigSectionGetPagePath = '/configsection';

  /**
   * Returns ConfigSection(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConfigSectionGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'iconName';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ConfigSection>>> {
    const rb = new RequestBuilder(this.rootUrl, ConfigSectionService.ServiceConfigSectionGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<ConfigSection>>;
      })
    );
  }

  /**
   * Returns ConfigSection(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConfigSectionGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'iconName';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<ConfigSection>> {
    return this.serviceConfigSectionGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ConfigSection>>): Array<ConfigSection> => r.body)
    );
  }

  /** Path part for operation `serviceConfigSectionInsert()` */
  static readonly ServiceConfigSectionInsertPath = '/configsection';

  /**
   * Creates an ConfigSection.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConfigSectionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConfigSectionInsert$Response(
    params?: {
  
    /**
     * ConfigSection that should be updated
     */
    body?: ConfigSection
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConfigSectionService.ServiceConfigSectionInsertPath, 'post');
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
   * Creates an ConfigSection.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConfigSectionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConfigSectionInsert(
    params?: {
  
    /**
     * ConfigSection that should be updated
     */
    body?: ConfigSection
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConfigSectionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConfigSectionGet()` */
  static readonly ServiceConfigSectionGetPath = '/configsection/{id}';

  /**
   * Returns an ConfigSection using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConfigSectionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ConfigSection>> {
    const rb = new RequestBuilder(this.rootUrl, ConfigSectionService.ServiceConfigSectionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ConfigSection>;
      })
    );
  }

  /**
   * Returns an ConfigSection using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConfigSectionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<ConfigSection> {
    return this.serviceConfigSectionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ConfigSection>): ConfigSection => r.body)
    );
  }

  /** Path part for operation `serviceConfigSectionUpdate()` */
  static readonly ServiceConfigSectionUpdatePath = '/configsection/{id}';

  /**
   * Updates an ConfigSection using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConfigSectionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConfigSectionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * ConfigSection that should be updated
     */
    body?: ConfigSection
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConfigSectionService.ServiceConfigSectionUpdatePath, 'put');
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
   * Updates an ConfigSection using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConfigSectionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConfigSectionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * ConfigSection that should be updated
     */
    body?: ConfigSection
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConfigSectionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConfigSectionErase()` */
  static readonly ServiceConfigSectionErasePath = '/configsection/{id}';

  /**
   * Deletes an ConfigSection using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConfigSectionErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ConfigSectionService.ServiceConfigSectionErasePath, 'delete');
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
   * Deletes an ConfigSection using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConfigSectionErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConfigSectionErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConfigSectionErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
