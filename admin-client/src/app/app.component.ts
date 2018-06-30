import { Component, ViewChild } from '@angular/core';
import { Modal } from 'ng2-modal';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('messageModalDiv') appMessageModal: Modal;
  constructor(public modalService: ModalService){}
  ngAfterViewInit() {
    this.modalService.messageModal = this.appMessageModal;
  }
  modalSubmitBtnClick() {
    if (this.modalService.modalOnSubmit) {
      this.modalService.modalOnSubmit();
      this.modalService.close();

    }
  }
}
