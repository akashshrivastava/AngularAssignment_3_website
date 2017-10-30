import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BottomComponentComponent } from './bottom-component/bottom-component.component';
import { BottomComponent2Component } from './bottom-component2/bottom-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponentComponent,
    MainComponentComponent,
    LoginComponentComponent,
    BottomComponentComponent,
    BottomComponent2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
