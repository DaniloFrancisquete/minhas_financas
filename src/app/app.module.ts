import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ToolbarComponent } from './commom/componetes/toolbar/toolbar.component';
import { MaterialModule } from './shared/material/material.module';
import { ListComponent } from './features/entradas/components/list/list.component';
import { StatusPipe } from './features/entradas/pipes/status.pipe';

import { LOCALE_ID } from "@angular/core";
import localePt from '@angular/common/locales/pt';
import { AuthGuard } from './commom/auth.guard';
import { AuthInterceptor } from './commom/auth.interceptor';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  
  ],
  providers: [
    AuthGuard,
    {provide : HTTP_INTERCEPTORS , useClass: AuthInterceptor, multi:true },
  {
    provide: LOCALE_ID, 
    useValue: 'pt-PT'
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
