import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeWrapperComponent} from './home-wrapper/home-wrapper.component';
import {HomeRoutingModule} from './home-routing.module';
import {LayoutModule} from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CategoryComponent} from './category/category.component';
import { FormCategoryComponent } from './category/form-category/form-category.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DeviceComponent } from './device/device.component';
import { FormDeviceComponent } from './device/form-device/form-device.component';
import {ColorPickerModule} from "ngx-color-picker";

@NgModule({
    declarations: [
        HomeWrapperComponent,
        CategoryComponent,
        FormCategoryComponent,
        DeviceComponent,
        FormDeviceComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        LayoutModule,
        HttpClientModule,
        ModalModule.forRoot(),
        ButtonsModule.forRoot(),
        ReactiveFormsModule,
        ColorPickerModule
    ]
})
export class HomeModule {
}
