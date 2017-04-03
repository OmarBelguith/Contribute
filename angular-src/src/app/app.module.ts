import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministrationSurveyComponent } from './components/administration-survey/administration-survey.component';
import { ProfessorSurveyComponent } from './components/professor-survey/professor-survey.component';
import { ExtraSurveysComponent } from './components/extra-surveys/extra-surveys.component';
import { SurveyComponent } from './components/survey/survey.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ValidateService } from './Services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './Services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SpinningLoaderComponent } from './components/spinning-loader/spinning-loader.component';
import { NgSpinningPreloader } from 'ng2-spinning-preloader';


const appRoutes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'professorsSurveys',component:ProfessorSurveyComponent,canActivate:[AuthGuard]},
  {path:'administrationSurveys',component:AdministrationSurveyComponent,canActivate:[AuthGuard]},
  {path:'extraSurveys',component:ExtraSurveysComponent,canActivate:[AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdministrationSurveyComponent,
    ProfessorSurveyComponent,
    ExtraSurveysComponent,
    SurveyComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    PageNotFoundComponent,
    SpinningLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService,AuthService,AuthGuard,NgSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
