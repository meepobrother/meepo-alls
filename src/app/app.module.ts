import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { AppComponent } from './app.component';

import { QuillEditorModule } from './quill-editor/public_api';
import { AvatarModule } from './avatar/index';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuillEditorModule,
    AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
