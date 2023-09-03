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
import { AudioFileImport } from '../models/audio-file-import';
import { AudioUrlImport } from '../models/audio-url-import';
import { ClassTypeCondition } from '../models/class-type-condition';
import { ConfigSection } from '../models/config-section';
import { Filter } from '../models/filter';
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
export class PutService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceAlbumUpdatePath, 'put');
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

  /** Path part for operation `serviceArtistUpdate()` */
  static readonly ServiceArtistUpdatePath = '/artist/{id}';

  /**
   * Updates an Artist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceArtistUpdatePath, 'put');
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
   * Updates an Artist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceArtistUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceAudioEditUpdatePath, 'put');
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceAudioFileUpdatePath, 'put');
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

  /** Path part for operation `serviceAudioFileImportUpdate()` */
  static readonly ServiceAudioFileImportUpdatePath = '/audiofileimport/{id}';

  /**
   * Updates an AudioFileImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceAudioFileImportUpdatePath, 'put');
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
   * Updates an AudioFileImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportUpdate()` */
  static readonly ServiceAudioUrlImportUpdatePath = '/audiourlimport/{id}';

  /**
   * Updates an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceAudioUrlImportUpdatePath, 'put');
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
   * Updates an AudioUrlImport using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioUrlImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConditionUpdate()` */
  static readonly ServiceConditionUpdatePath = '/condition/{id}';

  /**
   * Updates an Condition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceConditionUpdatePath, 'put');
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
   * Updates an Condition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceConfigSectionUpdatePath, 'put');
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

  /** Path part for operation `serviceFilterUpdate()` */
  static readonly ServiceFilterUpdatePath = '/filter/{id}';

  /**
   * Updates an Filter using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceFilterUpdatePath, 'put');
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
   * Updates an Filter using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceFilterUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceImageFileUpdatePath, 'put');
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceImageUrlImportUpdatePath, 'put');
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

  /** Path part for operation `serviceImportUpdate()` */
  static readonly ServiceImportUpdatePath = '/import/{id}';

  /**
   * Updates an Import using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceImportUpdatePath, 'put');
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
   * Updates an Import using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImportUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementUpdate()` */
  static readonly ServiceMusicElementUpdatePath = '/musicelement/{id}';

  /**
   * Updates an MusicElement using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceMusicElementUpdatePath, 'put');
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
   * Updates an MusicElement using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceMusicElementUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionUpdate()` */
  static readonly ServiceNumberConditionUpdatePath = '/numbercondition/{id}';

  /**
   * Updates an NumberCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceNumberConditionUpdatePath, 'put');
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
   * Updates an NumberCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceNumberConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServicePlayerUpdatePath, 'put');
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

  /** Path part for operation `servicePlayHistoryUpdate()` */
  static readonly ServicePlayHistoryUpdatePath = '/playhistory/{id}';

  /**
   * Updates an PlayHistory using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayHistoryUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayHistoryUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * PlayHistory that should be updated
     */
    body?: PlayHistory
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServicePlayHistoryUpdatePath, 'put');
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
   * Updates an PlayHistory using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayHistoryUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayHistoryUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * PlayHistory that should be updated
     */
    body?: PlayHistory
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlayHistoryUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `servicePlaylistUpdate()` */
  static readonly ServicePlaylistUpdatePath = '/playlist/{id}';

  /**
   * Updates an Playlist using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServicePlaylistUpdatePath, 'put');
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
   * Updates an Playlist using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlaylistUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemUpdate()` */
  static readonly ServiceQueueItemUpdatePath = '/queueitem/{id}';

  /**
   * Updates an QueueItem using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceQueueItemUpdatePath, 'put');
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
   * Updates an QueueItem using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceQueueItemUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceSettingUpdatePath, 'put');
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

  /** Path part for operation `serviceSongUpdate()` */
  static readonly ServiceSongUpdatePath = '/song/{id}';

  /**
   * Updates an Song using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Song that should be updated
     */
    body?: Song
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceSongUpdatePath, 'put');
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
   * Updates an Song using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Song that should be updated
     */
    body?: Song
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierUpdate()` */
  static readonly ServiceSongIdentifierUpdatePath = '/songidentifier/{id}';

  /**
   * Updates an SongIdentifier using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceSongIdentifierUpdatePath, 'put');
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
   * Updates an SongIdentifier using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongIdentifierUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionUpdate()` */
  static readonly ServiceStringConditionUpdatePath = '/stringcondition/{id}';

  /**
   * Updates an StringCondition using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceStringConditionUpdatePath, 'put');
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
   * Updates an StringCondition using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceStringConditionUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceTagUpdate()` */
  static readonly ServiceTagUpdatePath = '/tag/{id}';

  /**
   * Updates an Tag using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceTagUpdatePath, 'put');
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
   * Updates an Tag using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceTagUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceWebhookUpdate()` */
  static readonly ServiceWebhookUpdatePath = '/webhook/{id}';

  /**
   * Updates an Webhook using an id.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookUpdate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookUpdate$Response(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PutService.ServiceWebhookUpdatePath, 'put');
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
   * Updates an Webhook using an id.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookUpdate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookUpdate(
    params: {

    /**
     * The identifier of a resource
     */
      id: string;
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceWebhookUpdate$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
