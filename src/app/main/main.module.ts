import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/components/header/header.component';
import { MainComponent } from './home/components/main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HomeComponent, HeaderComponent, MainComponent],
  exports: [HomeComponent],
})
export class MainModule {}
