import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../Store/app.state';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.actions';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer'

@Component({
  selector: 'app-cadastra-usuarios',
  templateUrl: './cadastra-usuarios.component.html',
  styleUrls: ['./cadastra-usuarios.component.scss']
})
export class CadastraUsuariosComponent implements OnInit {

  model : UsuarioModel = {id : 0 , nome: "", idade : 0, perfil : ""};

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {
  }

  addUsuario(){
    if(this.model.id == 0){
      console.log("User criado", this.model);
      this.store.dispatch(fromUsuariosAction.CreateUsuario({payload: this.model}))
    }else{
      console.log("User atualizado", this.model);
      this.store.dispatch(fromUsuariosAction.UpdateUsuario({payload: this.model}))
    }
  }

}
