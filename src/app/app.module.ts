import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { AnimationComponent } from './animation/animation.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { RoleGuard } from './srvices/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    AnimationComponent,
    LoginComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
