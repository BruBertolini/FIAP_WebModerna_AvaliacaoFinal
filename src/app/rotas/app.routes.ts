import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ErroComponent } from '../erro/erro.component';
export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contatos', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: ErroComponent }
];
