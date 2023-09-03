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

import { AudioFile } from '../models/audio-file';

@Injectable({ providedIn: 'root' })
export class AudioFileService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAudioFileGetPage()` */
  static readonly ServiceAudioFileGetPagePath = '/audiofile';

  /**
   * Returns AudioFile(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'fileSize' | 'created' | 'start' | 'duration' | 'format' | 'bitRate' | 'code' | 'codeHash' | 'codeCount';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AudioFile>>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioFile>>;
      })
    );
  }

  /**
   * Returns AudioFile(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'fileSize' | 'created' | 'start' | 'duration' | 'format' | 'bitRate' | 'code' | 'codeHash' | 'codeCount';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<AudioFile>> {
    return this.serviceAudioFileGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioFile>>): Array<AudioFile> => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileInsert()` */
  static readonly ServiceAudioFileInsertPath = '/audiofile';

  /**
   * Creates an AudioFile.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileInsert()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceAudioFileInsert$Response(
    params?: {
      body?: Blob
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileInsertPath, 'post');
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
   * Creates an AudioFile.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileInsert$Response()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceAudioFileInsert(
    params?: {
      body?: Blob
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileGet()` */
  static readonly ServiceAudioFileGetPath = '/audiofile/{id}';

  /**
   * Returns an AudioFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioFile>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioFile>;
      })
    );
  }

  /**
   * Returns an AudioFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioFile> {
    return this.serviceAudioFileGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioFile>): AudioFile => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileUpdate()` */
  static readonly ServiceAudioFileUpdatePath = '/audiofile/{id}';

  /**
   * Updates an AudioFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileUpdate()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceAudioFileUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      body?: Blob
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileUpdatePath, 'put');
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
   * Updates an AudioFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileUpdate$Response()` instead.
   *
   * This method sends `application/octet-stream` and handles request body of type `application/octet-stream`.
   */
  serviceAudioFileUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      body?: Blob
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileErase()` */
  static readonly ServiceAudioFileErasePath = '/audiofile/{id}';

  /**
   * Deletes an AudioFile using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileErase()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileErase$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileErasePath, 'delete');
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
   * Deletes an AudioFile using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileErase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileErase(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileErase$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileContent()` */
  static readonly ServiceAudioFileContentPath = '/audiofile/{id}/content';

  /**
   * Returns the content of a file.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileContent$Mpeg()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Mpeg$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileContentPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filename', params.filename, {});
      rb.query('format', params.format, {});
    }

    return this.http.request(
      rb.build({ responseType: 'blob', accept: 'audio/mpeg', context })
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
   * To access the full response (for headers, for example), `serviceAudioFileContent$Mpeg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Mpeg(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<string> {
    return this.serviceAudioFileContent$Mpeg$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * Returns the content of a file.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileContent$Ogg()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Ogg$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileContentPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filename', params.filename, {});
      rb.query('format', params.format, {});
    }

    return this.http.request(
      rb.build({ responseType: 'blob', accept: 'audio/ogg', context })
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
   * To access the full response (for headers, for example), `serviceAudioFileContent$Ogg$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Ogg(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<string> {
    return this.serviceAudioFileContent$Ogg$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /**
   * Returns the content of a file.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileContent$Wav()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Wav$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<string>> {
    const rb = new RequestBuilder(this.rootUrl, AudioFileService.ServiceAudioFileContentPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filename', params.filename, {});
      rb.query('format', params.format, {});
    }

    return this.http.request(
      rb.build({ responseType: 'blob', accept: 'audio/wav', context })
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
   * To access the full response (for headers, for example), `serviceAudioFileContent$Wav$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileContent$Wav(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
      filename?: string;
      format?: 'ogg' | 'mp3' | 'flac' | 'wav';
    },
    context?: HttpContext
  ): Observable<string> {
    return this.serviceAudioFileContent$Wav$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
