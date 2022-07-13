import { UsuarioModel } from "src/app/Models/UsuarioModel";
import { Action, createReducer, on, createSelector, createFeatureSelector } from "@ngrx/store";
import * as fromUsuariosAction from "../usuarios/usuarios.actions"
import { filter } from "rxjs";

export interface UsuariosState {
    usuarios: UsuarioModel[];
    usuario: UsuarioModel | null;
    error: string | ""
}

export const initialState: UsuariosState = {
    usuarios: [],
    usuario: null,
    error: ""
}

const _usuarioReducer = createReducer(
    initialState,
    on(fromUsuariosAction.LoadUsuariosSucess, (state, { payload }) => ({ ...state, usuarios: payload, error: "" })),
    on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({ ...state, error: "" })),

    on(fromUsuariosAction.LoadUsuarioSucess, (state, { payload }) => ({ ...state, usuario: payload, error: "" })),
    on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({ ...state, error: "" })),

    on(fromUsuariosAction.CreateUsuarioSucess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios, payload], error: "" })),
    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: "" })),

    on(fromUsuariosAction.UpdateUsuarioSucess, (state, { payload }) => ({
        ...state, 
        usuarios: [...state.usuarios].map((row => {
            if (row.id == payload.id) {
                return payload;
            } else {
                return row;
            }
        })), error: ""
    })),
    on(fromUsuariosAction.UpdateUsuarioFail, (state, { error }) => ({ ...state, error: "" })),

    on(fromUsuariosAction.DeleteUsuarioSucess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios].filter((filter) => filter.id != payload), error: "" })),
    on(fromUsuariosAction.DeleteUsuarioFail, (state, { error }) => ({ ...state, error: "" })),
);

export function usuarioReducer(state = initialState, action: Action) {
    return _usuarioReducer(state, action);
}

const getUsuariosFeatureState = createFeatureSelector < UsuariosState > ( 'usuarios')

export const getUsuarios = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios
)

export const getUsuario = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuario
)

export const getUsuarioeErro = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.error
)

export const getUsuariosSpys = createSelector(
    getUsuariosFeatureState,
    (state: UsuariosState) => state.usuarios.filter((filter)=>filter.perfil =="spy")
)