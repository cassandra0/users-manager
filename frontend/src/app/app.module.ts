import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppareilComponent } from './appareil/appareil.component';
import {MatListModule, 
        MatButtonModule,
        MatInputModule, 
        MatCardModule,
        MatFormFieldModule, 
        MatToolbarModule, 
        MatIconModule} from '@angular/material';

import {AppareilService} from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from "@angular/router";
import { ListComponent } from './list/list.component';
import { EnregistrerComponent } from './enregistrer/enregistrer.component';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';


const appRoutes:Routes = [
    {path:'appareil', component:AppareilViewComponent},
    {path:'auth', component:AuthComponent},
    {path:'', component:AppareilViewComponent},
    {path:'enregistrer', component:EnregistrerComponent},
    {path:'list', component:ListComponent},
    {path:'appareil/:id',component:SingleAppareilComponent}


]


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppareilComponent,
    AppareilViewComponent,
    ListComponent,
    EnregistrerComponent,
    SingleAppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule


  ],
  providers: [
    AppareilService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
