import { createAction, props } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";

export const enum usuariosTypeAction {
    LOAD_USUARIOS = "[LOAD_USUARIOS] LOAD USUARIOS",
    LOAD_USUARIOS_SUCESS = "[LOAD_USUARIOS_SUCESS] LOAD USUARIOS SUCESS",
    LOAD_USUARIOS_FAIL = "[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL",

    LOAD_USUARIO = "[LOAD_USUARIO] LOAD USUARIO",
    LOAD_USUARIO_SUCESS = "[LOAD_USUARIO_SUCESS] LOAD USUARIO SUCESS",
    LOAD_USUARIO_FAIL = "[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL",

    CREATE_USUARIO = "[CREATE_USUARIO] CREATE USUARIOS",
    CREATE_USUARIO_SUCESS = "[CREATE_USUARIO_SUCESS] CREATE USUARIOS SUCESS",
    CREATE_USUARIO_FAIL = "[CREATE_USUARIO_FAIL] CREATE USUARIOS FAIL",

    UPDATE_USUARIO = "[UPDATE_USUARIO] UPDATE USUARIO",
    UPDATE_USUARIO_SUCESS = "[UPDATE_USUARIO_SUCESS] UPDATE USUARIOS SUCESS",
    UPDATE_USUARIO_FAIL = "[UPDATE_USUARIO_FAIL] UPDATE USUARIOS FAIL",

    DELETE_USUARIO = "[DELETE_USUARIO] DELETE USUARIOS",
    DELETE_USUARIO_SUCESS = "[DELETE_USUARIO_SUCESS] DELETE USUARIOS SUCESS",
    DELETE_USUARIO_FAIL = "[DELETE_USUARIO_FAIL] DELETE USUARIOS FAIL",
}

//

export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSucess = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCESS,
    props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL,
    props<{ error: UsuarioModel[] }>()
)

//

export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO,
    props<{ payload: number }>()
);

export const LoadUsuarioSucess = createAction(
    usuariosTypeAction.LOAD_USUARIO_SUCESS,
    props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeAction.LOAD_USUARIO_FAIL,
    props<{ error: String }>()
);

//

export const  CreateUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const  CreateUsuarioSucess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCESS,
    props<{ payload: UsuarioModel }>()
);

export const  CreateUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL,
    props<{ error: String }>()
);

//

export const  UpdateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO,
    props<{ payload: UsuarioModel }>()
);

export const  UpdateUsuarioSucess = createAction(
    usuariosTypeAction.UPDATE_USUARIO_SUCESS,
    props<{ payload: UsuarioModel }>()
);

export const  UpdateUsuarioFail = createAction(
    usuariosTypeAction.UPDATE_USUARIO_FAIL,
    props<{ error: String }>()
);


//

export const  DeleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO,
    props<{ payload: number }>()
);

export const  DeleteUsuarioSucess = createAction(
    usuariosTypeAction.DELETE_USUARIO_SUCESS,
    props<{ payload: number }>()
);

export const  DeleteUsuarioFail = createAction(
    usuariosTypeAction.DELETE_USUARIO_FAIL,
    props<{ error: String }>()
);