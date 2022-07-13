import { UsuariosState, usuarioReducer } from "./usuarios/usuarios.reducer";
import { ActionReducerMap, } from "@ngrx/store";
import { UsuariosEffects } from "./usuarios/usuarios.effects";

export interface AppState {
    usuarios: UsuariosState
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: usuarioReducer
}

export const appEfects = [
    UsuariosEffects,
    
]