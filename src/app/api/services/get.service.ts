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
import { Artist } from '../models/artist';
import { AudioEdit } from '../models/audio-edit';
import { AudioFile } from '../models/audio-file';
import { AudioFileImport } from '../models/audio-file-import';
import { AudioUrlImport } from '../models/audio-url-import';
import { ClassTypeCondition } from '../models/class-type-condition';
import { ConfigSection } from '../models/config-section';
import { Download } from '../models/download';
import { Event } from '../models/event';
import { Filter } from '../models/filter';
import { ImageFile } from '../models/image-file';
import { ImageUrlImport } from '../models/image-url-import';
import { NumberCondition } from '../models/number-condition';
import { PlayHistory } from '../models/play-history';
import { Player } from '../models/player';
import { Playlist } from '../models/playlist';
import { QueueItem } from '../models/queue-item';
import { Setting } from '../models/setting';
import { Song } from '../models/song';
import { SongIdentifier } from '../models/song-identifier';
import { StringCondition } from '../models/string-condition';
import { Tag } from '../models/tag';
import { Webhook } from '../models/webhook';

@Injectable({ providedIn: 'root' })
export class GetService extends BaseService {
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAlbumGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAlbumGetPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceArtistGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceArtistGetPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioEditGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioEditGetPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileGetPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileContentPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileContentPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileContentPath, 'get');
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

  /** Path part for operation `serviceAudioFileImportGetPage()` */
  static readonly ServiceAudioFileImportGetPagePath = '/audiofileimport';

  /**
   * Returns AudioFileImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<AudioFileImport>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioFileImport>>;
      })
    );
  }

  /**
   * Returns AudioFileImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<AudioFileImport>> {
    return this.serviceAudioFileImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioFileImport>>): Array<AudioFileImport> => r.body)
    );
  }

  /** Path part for operation `serviceAudioFileImportGet()` */
  static readonly ServiceAudioFileImportGetPath = '/audiofileimport/{id}';

  /**
   * Returns an AudioFileImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioFileImport>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioFileImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioFileImport>;
      })
    );
  }

  /**
   * Returns an AudioFileImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioFileImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioFileImport> {
    return this.serviceAudioFileImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioFileImport>): AudioFileImport => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportGetPage()` */
  static readonly ServiceAudioUrlImportGetPagePath = '/audiourlimport';

  /**
   * Returns AudioUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<AudioUrlImport>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioUrlImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<AudioUrlImport>>;
      })
    );
  }

  /**
   * Returns AudioUrlImport(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGetPage(
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
  ): Observable<Array<AudioUrlImport>> {
    return this.serviceAudioUrlImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AudioUrlImport>>): Array<AudioUrlImport> => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportGet()` */
  static readonly ServiceAudioUrlImportGetPath = '/audiourlimport/{id}';

  /**
   * Returns an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<AudioUrlImport>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceAudioUrlImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AudioUrlImport>;
      })
    );
  }

  /**
   * Returns an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceAudioUrlImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<AudioUrlImport> {
    return this.serviceAudioUrlImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<AudioUrlImport>): AudioUrlImport => r.body)
    );
  }

  /** Path part for operation `serviceConditionGetPage()` */
  static readonly ServiceConditionGetPagePath = '/condition';

  /**
   * Returns Condition(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'property' | 'hasStaticValue';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceConditionGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>;
      })
    );
  }

  /**
   * Returns Condition(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'property' | 'hasStaticValue';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<(NumberCondition | StringCondition | ClassTypeCondition)>> {
    return this.serviceConditionGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(NumberCondition | StringCondition | ClassTypeCondition)>>): Array<(NumberCondition | StringCondition | ClassTypeCondition)> => r.body)
    );
  }

  /** Path part for operation `serviceConditionGet()` */
  static readonly ServiceConditionGetPath = '/condition/{id}';

  /**
   * Returns an Condition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>;
      })
    );
  }

  /**
   * Returns an Condition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(NumberCondition | StringCondition | ClassTypeCondition)> {
    return this.serviceConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(NumberCondition | StringCondition | ClassTypeCondition)>): (NumberCondition | StringCondition | ClassTypeCondition) => r.body)
    );
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceConfigSectionGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceConfigSectionGetPath, 'get');
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

  /** Path part for operation `serviceDownloadGetPage()` */
  static readonly ServiceDownloadGetPagePath = '/download';

  /**
   * Returns Download(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'url' | 'status' | 'size' | 'currentSize' | 'bytesLeft' | 'bytesPerSeconds' | 'percentage' | 'retries' | 'contentType' | 'checksum' | 'created' | 'lastUpdate';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Download>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceDownloadGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Download>>;
      })
    );
  }

  /**
   * Returns Download(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'url' | 'status' | 'size' | 'currentSize' | 'bytesLeft' | 'bytesPerSeconds' | 'percentage' | 'retries' | 'contentType' | 'checksum' | 'created' | 'lastUpdate';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Download>> {
    return this.serviceDownloadGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Download>>): Array<Download> => r.body)
    );
  }

  /** Path part for operation `serviceDownloadGet()` */
  static readonly ServiceDownloadGetPath = '/download/{id}';

  /**
   * Returns an Download using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Download>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceDownloadGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Download>;
      })
    );
  }

  /**
   * Returns an Download using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceDownloadGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Download> {
    return this.serviceDownloadGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Download>): Download => r.body)
    );
  }

  /** Path part for operation `serviceEventGetPage()` */
  static readonly ServiceEventGetPagePath = '/event';

  /**
   * Returns Event(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceEventGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceEventGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Event>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceEventGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Event>>;
      })
    );
  }

  /**
   * Returns Event(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceEventGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceEventGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Event>> {
    return this.serviceEventGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Event>>): Array<Event> => r.body)
    );
  }

  /** Path part for operation `serviceEventGet()` */
  static readonly ServiceEventGetPath = '/event/{id}';

  /**
   * Returns an Event using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceEventGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceEventGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Event>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceEventGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Event>;
      })
    );
  }

  /**
   * Returns an Event using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceEventGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceEventGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Event> {
    return this.serviceEventGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Event>): Event => r.body)
    );
  }

  /** Path part for operation `serviceFilterGetPage()` */
  static readonly ServiceFilterGetPagePath = '/filter';

  /**
   * Returns Filter(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'description' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Filter>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceFilterGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Filter>>;
      })
    );
  }

  /**
   * Returns Filter(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'description' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Filter>> {
    return this.serviceFilterGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Filter>>): Array<Filter> => r.body)
    );
  }

  /** Path part for operation `serviceFilterGet()` */
  static readonly ServiceFilterGetPath = '/filter/{id}';

  /**
   * Returns an Filter using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Filter>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceFilterGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Filter>;
      })
    );
  }

  /**
   * Returns an Filter using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceFilterGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Filter> {
    return this.serviceFilterGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Filter>): Filter => r.body)
    );
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImageFileGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImageFileGetPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImageFileContentPath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImageUrlImportGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImageUrlImportGetPath, 'get');
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

  /** Path part for operation `serviceImportGetPage()` */
  static readonly ServiceImportGetPagePath = '/import';

  /**
   * Returns Import(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImportGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>;
      })
    );
  }

  /**
   * Returns Import(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'classType' | 'progress' | 'status' | 'identified' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>> {
    return this.serviceImportGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)>>): Array<(AudioUrlImport | ImageUrlImport | AudioFileImport)> => r.body)
    );
  }

  /** Path part for operation `serviceImportGet()` */
  static readonly ServiceImportGetPath = '/import/{id}';

  /**
   * Returns an Import using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceImportGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>;
      })
    );
  }

  /**
   * Returns an Import using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceImportGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(AudioUrlImport | ImageUrlImport | AudioFileImport)> {
    return this.serviceImportGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(AudioUrlImport | ImageUrlImport | AudioFileImport)>): (AudioUrlImport | ImageUrlImport | AudioFileImport) => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementGetPage()` */
  static readonly ServiceMusicElementGetPagePath = '/musicelement';

  /**
   * Returns MusicElement(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceMusicElementGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>;
      })
    );
  }

  /**
   * Returns MusicElement(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGetPage(
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
  ): Observable<Array<(Song | Album | Artist | Playlist)>> {
    return this.serviceMusicElementGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<(Song | Album | Artist | Playlist)>>): Array<(Song | Album | Artist | Playlist)> => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementGet()` */
  static readonly ServiceMusicElementGetPath = '/musicelement/{id}';

  /**
   * Returns an MusicElement using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<(Song | Album | Artist | Playlist)>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceMusicElementGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<(Song | Album | Artist | Playlist)>;
      })
    );
  }

  /**
   * Returns an MusicElement using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceMusicElementGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<(Song | Album | Artist | Playlist)> {
    return this.serviceMusicElementGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<(Song | Album | Artist | Playlist)>): (Song | Album | Artist | Playlist) => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionGet()` */
  static readonly ServiceNumberConditionGetPath = '/numbercondition/{id}';

  /**
   * Returns an NumberCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<NumberCondition>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceNumberConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NumberCondition>;
      })
    );
  }

  /**
   * Returns an NumberCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceNumberConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<NumberCondition> {
    return this.serviceNumberConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<NumberCondition>): NumberCondition => r.body)
    );
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlayerGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlayerGetPath, 'get');
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

  /** Path part for operation `servicePlayHistoryGetPage()` */
  static readonly ServicePlayHistoryGetPagePath = '/playhistory';

  /**
   * Returns PlayHistory(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayHistoryGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayHistoryGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'startTime' | 'endTime' | 'duration' | 'wasSkipped' | 'moveReason' | 'userAction';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<PlayHistory>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlayHistoryGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<PlayHistory>>;
      })
    );
  }

  /**
   * Returns PlayHistory(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayHistoryGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayHistoryGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'startTime' | 'endTime' | 'duration' | 'wasSkipped' | 'moveReason' | 'userAction';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<PlayHistory>> {
    return this.servicePlayHistoryGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<PlayHistory>>): Array<PlayHistory> => r.body)
    );
  }

  /** Path part for operation `servicePlayHistoryGet()` */
  static readonly ServicePlayHistoryGetPath = '/playhistory/{id}';

  /**
   * Returns an PlayHistory using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayHistoryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayHistoryGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<PlayHistory>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlayHistoryGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PlayHistory>;
      })
    );
  }

  /**
   * Returns an PlayHistory using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayHistoryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlayHistoryGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<PlayHistory> {
    return this.servicePlayHistoryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<PlayHistory>): PlayHistory => r.body)
    );
  }

  /** Path part for operation `servicePlaylistGetPage()` */
  static readonly ServicePlaylistGetPagePath = '/playlist';

  /**
   * Returns Playlist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<Playlist>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlaylistGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Playlist>>;
      })
    );
  }

  /**
   * Returns Playlist(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGetPage(
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
  ): Observable<Array<Playlist>> {
    return this.servicePlaylistGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Playlist>>): Array<Playlist> => r.body)
    );
  }

  /** Path part for operation `servicePlaylistGet()` */
  static readonly ServicePlaylistGetPath = '/playlist/{id}';

  /**
   * Returns an Playlist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Playlist>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServicePlaylistGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Playlist>;
      })
    );
  }

  /**
   * Returns an Playlist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  servicePlaylistGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Playlist> {
    return this.servicePlaylistGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Playlist>): Playlist => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemGetPage()` */
  static readonly ServiceQueueItemGetPagePath = '/queueitem';

  /**
   * Returns QueueItem(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'position' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<QueueItem>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceQueueItemGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<QueueItem>>;
      })
    );
  }

  /**
   * Returns QueueItem(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'position' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<QueueItem>> {
    return this.serviceQueueItemGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<QueueItem>>): Array<QueueItem> => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemGet()` */
  static readonly ServiceQueueItemGetPath = '/queueitem/{id}';

  /**
   * Returns an QueueItem using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<QueueItem>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceQueueItemGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<QueueItem>;
      })
    );
  }

  /**
   * Returns an QueueItem using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceQueueItemGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<QueueItem> {
    return this.serviceQueueItemGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<QueueItem>): QueueItem => r.body)
    );
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSettingGetPagePath, 'get');
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSettingGetPath, 'get');
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

  /** Path part for operation `serviceSongGetPage()` */
  static readonly ServiceSongGetPagePath = '/song';

  /**
   * Returns Song(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongGetPage$Response(
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
  ): Observable<StrictHttpResponse<Array<Song>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSongGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Song>>;
      })
    );
  }

  /**
   * Returns Song(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongGetPage(
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
  ): Observable<Array<Song>> {
    return this.serviceSongGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Song>>): Array<Song> => r.body)
    );
  }

  /** Path part for operation `serviceSongGet()` */
  static readonly ServiceSongGetPath = '/song/{id}';

  /**
   * Returns an Song using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Song>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSongGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Song>;
      })
    );
  }

  /**
   * Returns an Song using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Song> {
    return this.serviceSongGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Song>): Song => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierGetPage()` */
  static readonly ServiceSongIdentifierGetPagePath = '/songidentifier';

  /**
   * Returns SongIdentifier(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<SongIdentifier>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSongIdentifierGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<SongIdentifier>>;
      })
    );
  }

  /**
   * Returns SongIdentifier(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'status' | 'created' | 'finished';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<SongIdentifier>> {
    return this.serviceSongIdentifierGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SongIdentifier>>): Array<SongIdentifier> => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierGet()` */
  static readonly ServiceSongIdentifierGetPath = '/songidentifier/{id}';

  /**
   * Returns an SongIdentifier using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<SongIdentifier>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceSongIdentifierGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SongIdentifier>;
      })
    );
  }

  /**
   * Returns an SongIdentifier using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceSongIdentifierGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<SongIdentifier> {
    return this.serviceSongIdentifierGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<SongIdentifier>): SongIdentifier => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionGet()` */
  static readonly ServiceStringConditionGetPath = '/stringcondition/{id}';

  /**
   * Returns an StringCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<StringCondition>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceStringConditionGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<StringCondition>;
      })
    );
  }

  /**
   * Returns an StringCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceStringConditionGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StringCondition> {
    return this.serviceStringConditionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<StringCondition>): StringCondition => r.body)
    );
  }

  /** Path part for operation `serviceTagGetPage()` */
  static readonly ServiceTagGetPagePath = '/tag';

  /**
   * Returns Tag(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'type' | 'isVisible' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Tag>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceTagGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Tag>>;
      })
    );
  }

  /**
   * Returns Tag(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'name' | 'value' | 'type' | 'isVisible' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Tag>> {
    return this.serviceTagGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Tag>>): Array<Tag> => r.body)
    );
  }

  /** Path part for operation `serviceTagGet()` */
  static readonly ServiceTagGetPath = '/tag/{id}';

  /**
   * Returns an Tag using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Tag>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceTagGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Tag>;
      })
    );
  }

  /**
   * Returns an Tag using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceTagGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Tag> {
    return this.serviceTagGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Tag>): Tag => r.body)
    );
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
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceVersionGetVersionPath, 'get');
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

  /** Path part for operation `serviceWebhookGetPage()` */
  static readonly ServiceWebhookGetPagePath = '/webhook';

  /**
   * Returns Webhook(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookGetPage()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGetPage$Response(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'callbackUrl' | 'isActive' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Webhook>>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceWebhookGetPagePath, 'get');
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
        return r as StrictHttpResponse<Array<Webhook>>;
      })
    );
  }

  /**
   * Returns Webhook(s) using an filter.
   *  					Add an filter by using the '/filter' and '/condition' paths.					
   * You can sort them by an property.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookGetPage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGetPage(
    params?: {

    /**
     * the name of a Filter resource
     */
      filterName?: string;

    /**
     * input parameter for the filter use ';' to separate values
     */
      values?: string;
      sortBy?: 'callbackUrl' | 'isActive' | 'created';
      orderBy?: 'ASC' | 'DESC';
      pageIndex?: number;
    },
    context?: HttpContext
  ): Observable<Array<Webhook>> {
    return this.serviceWebhookGetPage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Webhook>>): Array<Webhook> => r.body)
    );
  }

  /** Path part for operation `serviceWebhookGet()` */
  static readonly ServiceWebhookGetPath = '/webhook/{id}';

  /**
   * Returns an Webhook using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGet$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Webhook>> {
    const rb = new RequestBuilder(this.rootUrl, GetService.ServiceWebhookGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'application/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Webhook>;
      })
    );
  }

  /**
   * Returns an Webhook using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  serviceWebhookGet(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
    },
    context?: HttpContext
  ): Observable<Webhook> {
    return this.serviceWebhookGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Webhook>): Webhook => r.body)
    );
  }

}
