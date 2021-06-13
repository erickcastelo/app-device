import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Device} from '../../../models/Device';
import {DeviceService} from '../../../services/device.service';

@Component({
    selector: 'app-device',
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

    public modalRef: BsModalRef;
    public modalCreateRef: BsModalRef;
    public devices: Device[] = [];
    private deviceId: number;

    constructor(
        private modalService: BsModalService,
        private deviceService: DeviceService) {  }

    ngOnInit(): void {
        this.listAll();
    }

    public listAll(): void {
        this.deviceService.getAll()
            .subscribe((devices: Device[]) => this.devices = devices);
    }

    public canDelete(confirmDelete: boolean): void {
        this.modalRef.hide();
        if (confirmDelete) {
            this.deviceService.delete(this.deviceId)
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
        this.deviceId = id;
    }

    public openModalCreate(template: TemplateRef<any>) {
        this.modalCreateRef = this.modalService.show(template);
    }

    public closeModalCreate() {
        this.modalCreateRef.hide();
        this.listAll();
    }
}
