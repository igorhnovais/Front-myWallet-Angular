import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { NewEntryComponent } from './components/pages/new-entry/new-entry.component';
import { NewExitComponent } from './components/pages/new-exit/new-exit.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';


const routes: Routes = [
  {path:"sign-in", component: SignInComponent},
  {path:"sign-up", component: SignUpComponent},
  {path:"home", component: HomeComponent},
  {path:"new-entry", component: NewEntryComponent},
  {path:"new-exit", component: NewExitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
