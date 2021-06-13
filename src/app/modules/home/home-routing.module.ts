import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeWrapperComponent} from './home-wrapper/home-wrapper.component';
import {CategoryComponent} from './category/category.component';
import {DeviceComponent} from './device/device.component';

const routes: Routes = [
    {
        path: 'device',
        component: HomeWrapperComponent,
        children: [
            {
                path: 'category',
                component: CategoryComponent,
            },
            {
                path: '',
                component: DeviceComponent,
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
