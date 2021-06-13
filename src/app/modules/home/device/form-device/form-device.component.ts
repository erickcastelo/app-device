import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Device} from '../../../../models/Device';
import {DeviceService} from '../../../../services/device.service';
import {CategoryService} from "../../../../services/category.service";
import {Category} from "../../../../models/Category";

@Component({
    selector: 'app-form-device',
    templateUrl: './form-device.component.html',
    styleUrls: ['./form-device.component.scss']
})
export class FormDeviceComponent implements OnInit {

    public form: FormGroup;
    public submitted = false;
    private device: Device = new Device();
    public categories: Category[] = [];

    public toggle = false;

    @Output() public onSubmit = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private deviceService: DeviceService,
        private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.validations();
        this.listCategories();
    }

    private listCategories(): void {
        this.categoryService.getAll()
            .subscribe((categories: Category[]) => this.categories = categories);
    }

    private validations(): void {
        this.form = this.formBuilder.group({
            color: ['', Validators.required],
            category_id: ['', Validators.required],
            part_number: ['', [Validators.required]],
        });
    }

    get f() {
        return this.form.controls;
    }

    public create(): void {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.device = this.form.value as Device;

        this.deviceService.create(this.device)
            .subscribe(result => {
                this.onSubmit.emit(true);
                alert('Registered successfully!');
            }, error => alert('Error when registering!'));
    }

    public setFormColor($event) {
        this.form.controls.color.setValue($event);
    }

    alert() {
        alert('ola');
    }
}
