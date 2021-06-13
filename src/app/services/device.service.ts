import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Device} from '../models/Device';

@Injectable({
    providedIn: 'root'
})
export class DeviceService extends BaseService<Device>{

    constructor(protected http: HttpClient) {
        super(http, 'device');
    }
}
