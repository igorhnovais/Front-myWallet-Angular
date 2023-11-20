import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewEntryComponent } from './components/pages/new-entry/new-entry.component';
import { NewExitComponent } from './components/pages/new-exit/new-exit.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { MoveComponent } from './components/pages/move/move.component';
import { EditMoveComponent } from './components/pages/edit-move/edit-move.component';
import { FormEditComponent } from './components/form-edit/form-edit.component';
import { FormNewEntryComponent } from './components/form-new-entry/form-new-entry.component';
import { FormNewExitComponent } from './components/form-new-exit/form-new-exit.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { FooterComponent } from './components/footer/footer.component';
import { IonicModule } from '@ionic/angular';
import { AllMovesComponent } from './components/pages/all-moves/all-moves.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FormSignInComponent,
    SignInComponent,
    NewEntryComponent,
    NewExitComponent,
    SignUpComponent,
    MoveComponent,
    EditMoveComponent,
    FormEditComponent,
    FormNewEntryComponent,
    FormNewExitComponent,
    FormSignUpComponent,
    FooterComponent,
    AllMovesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
