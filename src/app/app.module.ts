import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin/admin.component';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { FilterPipe } from './Pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PercentagePipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
