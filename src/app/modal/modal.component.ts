import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  ngOnInit(): void {


  mostrar: boolean = false;

  toggle () {
    this.mostrar = !this.mostrar;
  }

}
