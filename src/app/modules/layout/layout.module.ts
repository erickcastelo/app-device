import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TopbarComponent} from './topbar/topbar.component';


@NgModule({
    declarations: [
        TopbarComponent,
    ],
    exports: [
        TopbarComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
