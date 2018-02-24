import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { HeaderComponent } from './app-wrapper/header/header.component';
import { FooterComponent } from './app-wrapper/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AppWrapperComponent, 
    HeaderComponent, 
    FooterComponent
  ],
  exports: [
    AppWrapperComponent
  ]
})
export class CoreModule { }
