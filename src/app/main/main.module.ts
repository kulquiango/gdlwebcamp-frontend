import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, HeaderComponent],
  exports: [HomeComponent],
})
export class MainModule {}
