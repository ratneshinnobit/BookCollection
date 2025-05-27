import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";

interface ILoginProps{
    isAuthenticated:boolean,
    token:string


}

export const authAction=createActionGroup(
  {
    source:'Authentication API',
    events:{
        'login':props<{payload:ILoginProps}>(),
        'logout':emptyProps()
    }

  }
)