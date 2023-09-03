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
import { Download } from '../models/download';
import { Filter } from '../models/filter';
import { ImageUrlImport } from '../models/image-url-import';
import { NumberCondition } from '../models/number-condition';
import { PlayHistory } from '../models/play-history';
import { Playlist } from '../models/playlist';
import { QueueItem } from '../models/queue-item';
import { Setting } from '../models/setting';
import { Song } from '../models/song';
import { SongIdentifier } from '../models/song-identifier';
import { StringCondition } from '../models/string-condition';
import { Tag } from '../models/tag';
import { Webhook } from '../models/webhook';

@Injectable({ providedIn: 'root' })
export class PostService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `serviceAlbumInsert()` */
  static readonly ServiceAlbumInsertPath = '/album';

  /**
   * Creates an Album.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAlbumInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumInsert$Response(
    params?: {
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceAlbumInsertPath, 'post');
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
   * Creates an Album.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAlbumInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAlbumInsert(
    params?: {
  
    /**
     * Album that should be updated
     */
    body?: Album
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAlbumInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceArtistInsert()` */
  static readonly ServiceArtistInsertPath = '/artist';

  /**
   * Creates an Artist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceArtistInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistInsert$Response(
    params?: {
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceArtistInsertPath, 'post');
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
   * Creates an Artist.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceArtistInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceArtistInsert(
    params?: {
  
    /**
     * Artist that should be updated
     */
    body?: Artist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceArtistInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceAudioEditInsertPath, 'post');
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceAudioFileInsertPath, 'post');
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

  /** Path part for operation `serviceAudioFileImportInsert()` */
  static readonly ServiceAudioFileImportInsertPath = '/audiofileimport';

  /**
   * Creates an AudioFileImport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioFileImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportInsert$Response(
    params?: {
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceAudioFileImportInsertPath, 'post');
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
   * Creates an AudioFileImport.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioFileImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioFileImportInsert(
    params?: {
  
    /**
     * AudioFileImport that should be updated
     */
    body?: AudioFileImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioFileImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceAudioUrlImportInsert()` */
  static readonly ServiceAudioUrlImportInsertPath = '/audiourlimport';

  /**
   * Creates an AudioUrlImport.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceAudioUrlImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportInsert$Response(
    params?: {
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceAudioUrlImportInsertPath, 'post');
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
   * Creates an AudioUrlImport.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceAudioUrlImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceAudioUrlImportInsert(
    params?: {
  
    /**
     * AudioUrlImport that should be updated
     */
    body?: AudioUrlImport
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceAudioUrlImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceConditionInsert()` */
  static readonly ServiceConditionInsertPath = '/condition';

  /**
   * Creates an Condition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionInsert$Response(
    params?: {
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceConditionInsertPath, 'post');
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
   * Creates an Condition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceConditionInsert(
    params?: {
  
    /**
     * Condition that should be updated
     */
    body?: (NumberCondition | StringCondition | ClassTypeCondition)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceConfigSectionInsertPath, 'post');
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

  /** Path part for operation `serviceDownloadInsert()` */
  static readonly ServiceDownloadInsertPath = '/download';

  /**
   * Creates an Download.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceDownloadInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceDownloadInsert$Response(
    params?: {
  
    /**
     * Download that should be updated
     */
    body?: Download
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceDownloadInsertPath, 'post');
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
   * Creates an Download.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceDownloadInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceDownloadInsert(
    params?: {
  
    /**
     * Download that should be updated
     */
    body?: Download
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceDownloadInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceFilterInsert()` */
  static readonly ServiceFilterInsertPath = '/filter';

  /**
   * Creates an Filter.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceFilterInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterInsert$Response(
    params?: {
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceFilterInsertPath, 'post');
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
   * Creates an Filter.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceFilterInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceFilterInsert(
    params?: {
  
    /**
     * Filter that should be updated
     */
    body?: Filter
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceFilterInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceImageFileInsertPath, 'post');
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceImageUrlImportInsertPath, 'post');
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

  /** Path part for operation `serviceImportInsert()` */
  static readonly ServiceImportInsertPath = '/import';

  /**
   * Creates an Import.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceImportInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportInsert$Response(
    params?: {
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceImportInsertPath, 'post');
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
   * Creates an Import.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceImportInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceImportInsert(
    params?: {
  
    /**
     * Import that should be updated
     */
    body?: (AudioUrlImport | ImageUrlImport | AudioFileImport)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceImportInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceMusicElementInsert()` */
  static readonly ServiceMusicElementInsertPath = '/musicelement';

  /**
   * Creates an MusicElement.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceMusicElementInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementInsert$Response(
    params?: {
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceMusicElementInsertPath, 'post');
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
   * Creates an MusicElement.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceMusicElementInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceMusicElementInsert(
    params?: {
  
    /**
     * MusicElement that should be updated
     */
    body?: (Song | Album | Artist | Playlist)
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceMusicElementInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceNumberConditionInsert()` */
  static readonly ServiceNumberConditionInsertPath = '/numbercondition';

  /**
   * Creates an NumberCondition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceNumberConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionInsert$Response(
    params?: {
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceNumberConditionInsertPath, 'post');
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
   * Creates an NumberCondition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceNumberConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceNumberConditionInsert(
    params?: {
  
    /**
     * NumberCondition that should be updated
     */
    body?: NumberCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceNumberConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `servicePlayHistoryInsert()` */
  static readonly ServicePlayHistoryInsertPath = '/playhistory';

  /**
   * Creates an PlayHistory.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlayHistoryInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayHistoryInsert$Response(
    params?: {
  
    /**
     * PlayHistory that should be updated
     */
    body?: PlayHistory
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServicePlayHistoryInsertPath, 'post');
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
   * Creates an PlayHistory.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlayHistoryInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlayHistoryInsert(
    params?: {
  
    /**
     * PlayHistory that should be updated
     */
    body?: PlayHistory
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlayHistoryInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `servicePlaylistInsert()` */
  static readonly ServicePlaylistInsertPath = '/playlist';

  /**
   * Creates an Playlist.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `servicePlaylistInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistInsert$Response(
    params?: {
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServicePlaylistInsertPath, 'post');
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
   * Creates an Playlist.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `servicePlaylistInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  servicePlaylistInsert(
    params?: {
  
    /**
     * Playlist that should be updated
     */
    body?: Playlist
    },
    context?: HttpContext
  ): Observable<void> {
    return this.servicePlaylistInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceQueueItemInsert()` */
  static readonly ServiceQueueItemInsertPath = '/queueitem';

  /**
   * Creates an QueueItem.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceQueueItemInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemInsert$Response(
    params?: {
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceQueueItemInsertPath, 'post');
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
   * Creates an QueueItem.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceQueueItemInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceQueueItemInsert(
    params?: {
  
    /**
     * QueueItem that should be updated
     */
    body?: QueueItem
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceQueueItemInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
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
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceSettingInsertPath, 'post');
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

  /** Path part for operation `serviceSongInsert()` */
  static readonly ServiceSongInsertPath = '/song';

  /**
   * Creates an Song.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongInsert$Response(
    params?: {
  
    /**
     * Song that should be updated
     */
    body?: Song
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceSongInsertPath, 'post');
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
   * Creates an Song.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongInsert(
    params?: {
  
    /**
     * Song that should be updated
     */
    body?: Song
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceSongIdentifierInsert()` */
  static readonly ServiceSongIdentifierInsertPath = '/songidentifier';

  /**
   * Creates an SongIdentifier.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceSongIdentifierInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierInsert$Response(
    params?: {
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceSongIdentifierInsertPath, 'post');
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
   * Creates an SongIdentifier.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceSongIdentifierInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceSongIdentifierInsert(
    params?: {
  
    /**
     * SongIdentifier that should be updated
     */
    body?: SongIdentifier
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceSongIdentifierInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceStringConditionInsert()` */
  static readonly ServiceStringConditionInsertPath = '/stringcondition';

  /**
   * Creates an StringCondition.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceStringConditionInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionInsert$Response(
    params?: {
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceStringConditionInsertPath, 'post');
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
   * Creates an StringCondition.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceStringConditionInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceStringConditionInsert(
    params?: {
  
    /**
     * StringCondition that should be updated
     */
    body?: StringCondition
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceStringConditionInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceTagInsert()` */
  static readonly ServiceTagInsertPath = '/tag';

  /**
   * Creates an Tag.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceTagInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagInsert$Response(
    params?: {
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceTagInsertPath, 'post');
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
   * Creates an Tag.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceTagInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceTagInsert(
    params?: {
  
    /**
     * Tag that should be updated
     */
    body?: Tag
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceTagInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `serviceWebhookInsert()` */
  static readonly ServiceWebhookInsertPath = '/webhook';

  /**
   * Creates an Webhook.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `serviceWebhookInsert()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookInsert$Response(
    params?: {
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PostService.ServiceWebhookInsertPath, 'post');
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
   * Creates an Webhook.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `serviceWebhookInsert$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  serviceWebhookInsert(
    params?: {
  
    /**
     * Webhook that should be updated
     */
    body?: Webhook
    },
    context?: HttpContext
  ): Observable<void> {
    return this.serviceWebhookInsert$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
