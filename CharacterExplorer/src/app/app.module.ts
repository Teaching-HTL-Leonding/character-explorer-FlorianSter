import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirTableAccessTokenInterceptor } from './air-table-access-token.interceptor';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'AIRTABLE_CHARACTERS_URL',
      useValue: 'https://api.airtable.com/v0/appqYkl9yt1qyNPoi/characters'
    },
    {
      provide: 'PONY_WEB_URL',
      useValue: 'https://ponyweb.ml/v1/character/all'
    },
    {
      provide: 'AIRTABLE_ACCESS_TOKEN',
      useValue: 'patzKEXx8fLaSsoQX.35cfdb0c11fd6544195ef5e3751fc2dc8c608305bf0d6ba5804954a0e8ee63d2'
    }
    /*,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AirTableAccessTokenInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
