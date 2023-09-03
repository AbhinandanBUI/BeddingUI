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

import { Setting } from '../models/setting';

@Injectable({ providedIn: 'root' })
export class SettingService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceSettingGetPage()` */
  static readonly ServiceSettingGetPagePath = '/setting';

  /**
   * Returns Setting(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSettingGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'description' | 'type' | 'subType' | 'isDisabled' | 'isHidden';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Setting>>> {
    const rb = new RequestBuilder(this.rootUrl, SettingService.ServiceSettingGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Setting>>;
      })
    );
  }

  /**
   * Returns Setting(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSettingGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'description' | 'type' | 'subType' | 'isDisabled' | 'isHidden';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Setting>> {
    return this.serviceSettingGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Setting>>): Array<Setting> => r.body)
    );
  }

  /** Path part for operation `serviceSettingInsert()` */
  static readonly ServiceSettingInsertPath = '/setting';

  /**
   * Creates an Setting.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSettingInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSettingInsert$Response(
    params?: {
  
    /**
     * Setting that should be updated
     */
    body?: Setting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SettingService.ServiceSettingInsertPath, 'post');
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
   * Creates an Setting.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSettingInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSettingInsert(
    params?: {
  
    /**
     * Setting that should be updated
     */
    body?: Setting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSettingInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSettingGet()` */
  static readonly ServiceSettingGetPath = '/setting/{id}';

  /**
   * Returns an Setting using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSettingGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Setting>> {
    const rb = new RequestBuilder(this.rootUrl, SettingService.ServiceSettingGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Setting>;
      })
    );
  }

  /**
   * Returns an Setting using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSettingGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Setting> {
    return this.serviceSettingGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Setting>): Setting => r.body)
    );
  }

  /** Path part for operation `serviceSettingUpdate()` */
  static readonly ServiceSettingUpdatePath = '/setting/{id}';

  /**
   * Updates an Setting using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSettingUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSettingUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Setting that should be updated
     */
    body?: Setting
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SettingService.ServiceSettingUpdatePath, 'put');
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
   * Updates an Setting using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSettingUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSettingUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Setting that should be updated
     */
    body?: Setting
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSettingUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSettingErase()` */
  static readonly ServiceSettingErasePath = '/setting/{id}';

  /**
   * Deletes an Setting using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSettingErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, SettingService.ServiceSettingErasePath, 'delete');
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
   * Deletes an Setting using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSettingErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSettingErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSettingErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
