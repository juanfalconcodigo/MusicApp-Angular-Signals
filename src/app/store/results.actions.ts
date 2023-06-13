import { createAction, props } from "@ngrx/store";
import { Song } from "../interfaces";

export const setResults=createAction('[RESULST Set results]',props<{results:Song[]}>())