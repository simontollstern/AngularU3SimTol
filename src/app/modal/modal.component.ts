import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

// A general modal that displays the message sent with @Input()
export class ModalComponent {
  @Input() modalMessage: string;
  @Output() closeModal = new EventEmitter<any>();

  constructor() { }

  // Emits an event to close the modal
  close(): void{
    this.closeModal.emit(null);
  }
}
