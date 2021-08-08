import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../Interfaces/user';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  @Input() user = { name: '', country: '' };
  @Output() public readonly updatedUser = new EventEmitter<IUser>();

  constructor() {}

  ngOnInit() {}

  updateUser(user: IUser) {
    this.updatedUser.emit(user);
  }
}
