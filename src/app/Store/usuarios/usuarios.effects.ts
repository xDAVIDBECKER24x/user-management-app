import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { UsuarioService } from "src/app/Repository/UsuarioService";
import * as fromUsuariosAction from "./usuarios.actions";

@Injectable()
export class UsuariosEffects {

    constructor(private action$: Actions, private batata: UsuarioService) {

    }

    loadUsuarios$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIOS),
                exhaustMap(() => this.batata.getUsuarios()
                    .pipe(
                        map(payload => 
                            fromUsuariosAction.LoadUsuariosSucess({ payload }),
                            catchError(error => of(fromUsuariosAction.LoadUsuariosFail({ error })))
                        )
                    )
                )
            )
    )

    loadUsuario$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.LOAD_USUARIO),
                exhaustMap((record: any) => this.batata.getUsuario(record.payload)
                    .pipe(
                        map(payload =>
                            fromUsuariosAction.LoadUsuarioSucess({ payload }),
                            catchError(error => of(fromUsuariosAction.LoadUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    createUsuario$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.CREATE_USUARIO),
                exhaustMap((record: any) => this.batata.addUsuario(record.payload)
                    .pipe(
                        map(payload =>
                            fromUsuariosAction.LoadUsuarioSucess({ payload }),
                            catchError(error => of(fromUsuariosAction.CreateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    updateUsuario$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.UPDATE_USUARIO),
                exhaustMap((record: any) => this.batata.updateUsuario(record.payload)
                    .pipe(
                        map(payload =>
                            fromUsuariosAction.UpdateUsuarioSucess({ payload }),
                            catchError(error => of(fromUsuariosAction.UpdateUsuarioFail({ error })))
                        )
                    )
                )
            )
    )

    deleteUsuario$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(fromUsuariosAction.usuariosTypeAction.DELETE_USUARIO),
                exhaustMap((record: any) => this.batata.deleteUsuario(record.payload)
                    .pipe(
                        map(() =>
                            fromUsuariosAction.LoadUsuarioSucess({ payload : record.payload }),
                            catchError(error => of(fromUsuariosAction.DeleteUsuarioFail({ error })))
                        )
                    )
                )
            )
    )
}
