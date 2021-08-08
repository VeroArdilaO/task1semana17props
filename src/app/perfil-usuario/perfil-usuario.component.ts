import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  @Input() user = {name: "", country: ""};

  constructor() {}

  ngOnInit() {}
}
