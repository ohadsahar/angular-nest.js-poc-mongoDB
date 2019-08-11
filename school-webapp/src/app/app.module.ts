import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './core/components/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OldTasksComponent } from './core/components/old-tasks/old-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    OldTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
