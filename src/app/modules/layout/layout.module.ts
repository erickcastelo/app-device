import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TopbarComponent} from './topbar/topbar.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


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
        CollapseModule,
    ]
})
export class LayoutModule {
}
