import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {AppRoutingModule} from './app-routing.module';
import {SetupModule} from './pages/setup/setup.module';
import {LocalStorageService} from './services/local-storage/local-storage.service';
import {MainModule} from './pages/main/main.module';
import {MainRoutingModule} from './pages/main/main-routing.module';
import {ListService} from './services/list/list.service';
import {TodoService} from './services/todo/todo.service';
import {SummaryModule} from './pages/summary/summary.module';
import {SummaryRoutingModule} from './pages/summary/summary-routing.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRoutingModule,
    SetupModule,
    MainModule,
    MainRoutingModule,
    SummaryModule,
    SummaryRoutingModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, LocalStorageService, ListService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
