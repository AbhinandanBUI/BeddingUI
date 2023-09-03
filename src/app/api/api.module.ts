/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { GetService } from './services/get.service';
import { AlbumService } from './services/album.service';
import { PostService } from './services/post.service';
import { PutService } from './services/put.service';
import { DeleteService } from './services/delete.service';
import { ArtistService } from './services/artist.service';
import { AudioEditService } from './services/audio-edit.service';
import { AudioFileService } from './services/audio-file.service';
import { AudioFileImportService } from './services/audio-file-import.service';
import { AudioUrlImportService } from './services/audio-url-import.service';
import { ConditionService } from './services/condition.service';
import { ConfigSectionService } from './services/config-section.service';
import { DownloadService } from './services/download.service';
import { EventService } from './services/event.service';
import { FilterService } from './services/filter.service';
import { ImageFileService } from './services/image-file.service';
import { ImageUrlImportService } from './services/image-url-import.service';
import { ImportService } from './services/import.service';
import { MusicElementService } from './services/music-element.service';
import { NumberConditionService } from './services/number-condition.service';
import { PlayerService } from './services/player.service';
import { PlayHistoryService } from './services/play-history.service';
import { PlaylistService } from './services/playlist.service';
import { QueueItemService } from './services/queue-item.service';
import { SettingService } from './services/setting.service';
import { SongService } from './services/song.service';
import { SongIdentifierService } from './services/song-identifier.service';
import { StringConditionService } from './services/string-condition.service';
import { TagService } from './services/tag.service';
import { VersionService } from './services/version.service';
import { WebhookService } from './services/webhook.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    GetService,
    AlbumService,
    PostService,
    PutService,
    DeleteService,
    ArtistService,
    AudioEditService,
    AudioFileService,
    AudioFileImportService,
    AudioUrlImportService,
    ConditionService,
    ConfigSectionService,
    DownloadService,
    EventService,
    FilterService,
    ImageFileService,
    ImageUrlImportService,
    ImportService,
    MusicElementService,
    NumberConditionService,
    PlayerService,
    PlayHistoryService,
    PlaylistService,
    QueueItemService,
    SettingService,
    SongService,
    SongIdentifierService,
    StringConditionService,
    TagService,
    VersionService,
    WebhookService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
