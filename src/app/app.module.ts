import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { appRoutes } from './rotas/app.routes';
import { ErroComponent } from './erro/erro.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ContatoService } from './services/contato.service';
import { FormsModule } from '@angular/forms';
import { SubLista } from './filters/sublista.filter';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpModule],
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CadastroComponent,
    ErroComponent,
    SubLista
  ],
  bootstrap: [AppComponent],
  providers: [ContatoService]
})
export class AppModule {}
