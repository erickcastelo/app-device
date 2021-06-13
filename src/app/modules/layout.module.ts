import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {TopbarComponent} from './layout/topbar/topbar.component';
import {FooterComponent} from './layout/footer/footer.component';


@NgModule({
    declarations: [
        TopbarComponent,
        FooterComponent
    ],
    exports: [
        TopbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class LayoutModule {
}
