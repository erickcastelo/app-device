import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../models/Category';
import {CategoryService} from '../../../../services/category.service';

@Component({
    selector: 'app-form-category',
    templateUrl: './form-category.component.html',
    styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent implements OnInit {

    public form: FormGroup;
    public submitted = false;
    private category: Category = new Category();

    @Output() public onSubmit = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.validations();
    }

    private validations(): void {
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(128)]],
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
        this.category = this.form.value as Category;

        this.categoryService.create(this.category)
            .subscribe(result => {
                this.onSubmit.emit(true);
                alert('Registered successfully!');
            }, error => alert('Error when registering!'));
    }
}
