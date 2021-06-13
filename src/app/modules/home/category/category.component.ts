import {Component, OnInit, TemplateRef} from '@angular/core';
import {Category} from '../../../models/Category';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {CategoryService} from '../../../services/category.service';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    public modalRef: BsModalRef;
    public modalCreateRef: BsModalRef;
    public categories: Category[] = [];
    private categoryId: number;

    constructor(
        private modalService: BsModalService,
        private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.listAll();
    }

    public listAll(): void {
        this.categoryService.getAll()
            .subscribe((categories: Category[]) => this.categories = categories);
    }

    public canDelete(confirmDelete: boolean): void {
        this.modalRef.hide();
        if (confirmDelete) {
            this.categoryService.delete(this.categoryId)
                .subscribe(() => {
                    this.listAll();
                    alert('Successfully deleted!');
                }, error => {
                    alert('Error deleting!');
                });
        }
    }

    public openModalDelete(template: TemplateRef<any>, id: number) {
        this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
        this.categoryId = id;
    }

    public openModalCreate(template: TemplateRef<any>) {
        this.modalCreateRef = this.modalService.show(template);
    }

    public closeModalCreate() {
        this.modalCreateRef.hide();
        this.listAll();
    }
}
