import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {
  @Input() Usuario: string;
  @Input() Pais: string;

  constructor() {}

  ngOnInit() {}
}
