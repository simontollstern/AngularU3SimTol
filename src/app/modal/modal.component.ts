import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalMessage: string;
  @Output() closeModal = new EventEmitter<any>();

  constructor() { }

  close(): void{
    this.closeModal.emit(null);
  }
}
