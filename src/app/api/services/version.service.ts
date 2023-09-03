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


@Injectable({ providedIn: 'root' })
export class VersionService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceVersionGetVersion()` */
  static readonly ServiceVersionGetVersionPath = '/version';

  /**
   * Returns the app version.
   * .
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceVersionGetVersion()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceVersionGetVersion$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, VersionService.ServiceVersionGetVersionPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Returns the app version.
   * .
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceVersionGetVersion$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceVersionGetVersion(
    params?: {
    },
    context?: HttpContext
  ): Observable<string> {
    return this.serviceVersionGetVersion$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
