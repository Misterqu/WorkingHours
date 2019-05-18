import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CalendarModule, CalendarMonthModule, CalendarWeekModule} from 'angular-calendar';

import {IonicModule} from '@ionic/angular';

import {CalendarPage} from './calendar.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: CalendarPage
            }
        ]),
        CalendarWeekModule,
        CalendarMonthModule,
        CalendarModule
    ],
    declarations: [CalendarPage]
})
export class CalendarPageModule {
}
