import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CalendarPage } from './calendar.page';
import {CalendarMonthModule, CalendarWeekModule} from "angular-calendar";

const routes: Routes = [
  {
    path: '',
    component: CalendarPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        CalendarWeekModule,
        CalendarMonthModule
    ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
