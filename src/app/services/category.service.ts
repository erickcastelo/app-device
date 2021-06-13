import {Injectable} from '@angular/core';
import {BaseService} from './base.service';
import {Category} from '../models/Category';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends BaseService<Category>{

    constructor(protected http: HttpClient) {
        super(http, 'category');
    }
}
