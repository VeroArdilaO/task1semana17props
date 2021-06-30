import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {
  @Input() name: string;
  @Input() country: string;
  constructor() { }

  ngOnInit() {
  }


}