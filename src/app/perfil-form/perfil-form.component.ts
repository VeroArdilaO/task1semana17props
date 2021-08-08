import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../Interfaces/user';

@Component({
  selector: 'app-perfil-form',
  templateUrl: './perfil-form.component.html',
  styleUrls: ['./perfil-form.component.css']
})
export class PerfilFormComponent implements OnInit {
  
  name: string = '';
  country: string = '';

  @Input() public set user(value: IUser) {
    this.user = { ...value };
  }
  public get user() {
    return this._user;
  }

  private _user = { name: '', country: '' };

  @Output() public readonly updatedUser = new EventEmitter<IUser>();
  constructor() { }

  ngOnInit() {}

  submit() {
    this.updatedUser.emit({ ...this.user });
  }
}