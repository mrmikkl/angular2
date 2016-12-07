import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MailService, {provide: 'api', useValue: 'http://localhost:3000'}],
  /** 
   * providers: [{provide:'mail', useClass:MailService}] 
   * Erlaubt inject über Name anstatt über Type 
   * Bspw: constructor(@Inject('mail') private mail: MailService){...}
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
