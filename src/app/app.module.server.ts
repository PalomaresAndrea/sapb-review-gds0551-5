import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
import { AppRoutingModule } from './app-routing.module';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { PrimengModule } from './primeng.module';



const modPrimeNg:any =[

]


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ButtonModule,
    PrimengModule,
    modPrimeNg
    
  ],
  exports:[

  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
