import { createAction, props } from '@ngrx/store';
import { TYPE_THEME } from '../interfaces';

export const setTheme=createAction('[THEME Set theme]',props<{theme:TYPE_THEME}>());