import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MainComponent } from './main/main.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { CadastraUsuariosComponent } from './cadastra-usuarios/cadastra-usuarios.component';
import { StoreModule } from '@ngrx/store';
import { appEfects, appReducer } from './Store/app.state';
import { EffectsModule, EffectSources } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    MainComponent,
    CadastraUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MdbModalModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEfects),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
