import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { testPageRoutingModule } from './test-routing.module';

import { testPage } from './test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    testPageRoutingModule
  ],
  declarations: [testPage]
})
export class testPageModule {}
