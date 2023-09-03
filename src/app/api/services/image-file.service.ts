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

import { ImageFile } from '../models/image-file';

@Injectable({ providedIn: 'root' })
export class ImageFileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceImageFileGetPage()` */
  static readonly ServiceImageFileGetPagePath = '/imagefile';

  /**
   * Returns ImageFile(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'fileSize' | 'created' | 'width' | 'height' | 'format';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<ImageFile>>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<ImageFile>>;
      })
    );
  }

  /**
   * Returns ImageFile(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'fileSize' | 'created' | 'width' | 'height' | 'format';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<ImageFile>> {
    return this.serviceImageFileGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ImageFile>>): Array<ImageFile> => r.body)
    );
  }

  /** Path part for operation `serviceImageFileInsert()` */
  static readonly ServiceImageFileInsertPath = '/imagefile';

  /**
   * Creates an ImageFile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileInsert()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceImageFileInsert$Response(
    params?: {
      body?: Blob
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileInsertPath, 'post');
    if (params) {
      rb.body(params.body, 'application/octet-stream');
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
   * Creates an ImageFile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileInsert$Response()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceImageFileInsert(
    params?: {
      body?: Blob
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageFileInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImageFileGet()` */
  static readonly ServiceImageFileGetPath = '/imagefile/{id}';

  /**
   * Returns an ImageFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<ImageFile>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ImageFile>;
      })
    );
  }

  /**
   * Returns an ImageFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<ImageFile> {
    return this.serviceImageFileGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ImageFile>): ImageFile => r.body)
    );
  }

  /** Path part for operation `serviceImageFileUpdate()` */
  static readonly ServiceImageFileUpdatePath = '/imagefile/{id}';

  /**
   * Updates an ImageFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileUpdate()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceImageFileUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      body?: Blob
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileUpdatePath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/octet-stream');
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
   * Updates an ImageFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileUpdate$Response()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceImageFileUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      body?: Blob
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageFileUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImageFileErase()` */
  static readonly ServiceImageFileErasePath = '/imagefile/{id}';

  /**
   * Deletes an ImageFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileErasePath, 'delete');
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
   * Deletes an ImageFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImageFileErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceImageFileContent()` */
  static readonly ServiceImageFileContentPath = '/imagefile/{id}/content';

  /**
   * Returns the content of a file.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImageFileContent()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileContent$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'jpg' | 'png';
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, ImageFileService.ServiceImageFileContentPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filename', params.filename, {});
      rb.query('format', params.format, {});
    }

    return this.http.request(
      rb.build({ responseType: 'blob', accept: 'image/jpg', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Returns the content of a file.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImageFileContent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImageFileContent(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'jpg' | 'png';
    },
    context?: HttpContext
  ): Observable<string> {
    return this.serviceImageFileContent$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
